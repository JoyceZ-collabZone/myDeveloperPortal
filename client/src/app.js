import page from "//unpkg.com/page/page.mjs";

page.configure({ window: window }); // bind to main window

//frontend components
import defaultHomePage from "./components/defaultHomePage.js";
import userLogin from "./components/userSignIn.js";
import registrationSubmit from "./components/registrationManagement.js";
import useronboardingForm from "./components/userOnboardingForm.js";
import adronboardingForm from "./components/adrOnboardingForm.js";

const showParentPages = () => {
  //configure routes

  page("/", () => {
    page.redirect("/home");
  });

  page("/home", defaultHomePage, () => {
    $("#app").append(`<h2> test</h2>`);
  });

  page("/login", userLogin, () => {
    $("#app").append(`<h2>user logged in</h2>`);
  });
  //   page("/profile", profileLoadingPage);

  page("/useronboarding", useronboardingForm, () => {
    $("#app").append(`<h2>user logged in</h2>`);
    console.log("Inside user onboarding");
  });
  page("/adronboarding", adronboardingForm, () => {
    $("#app").append(`<h2>user logged in</h2>`);
    console.log("Inside adr onboarding");
  });

  page("/registration", registrationSubmit, () => {
    $("#registrationId").append(`<h1>Registration Management Page</h>`);
  });

  page(); // middleware to move next
  page({ hashbang: true });
};

//jquery on ready
$(() => {
  console.log("pages on load ", page);
  showParentPages();
});
