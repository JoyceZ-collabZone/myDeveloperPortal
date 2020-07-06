import page from "//unpkg.com/page/page.mjs";

page.configure({ window: window }); // bind to main window

//frontend components
import defaultHomePage from "./components/defaultHomePage.js";
import userLogin from "./components/userSignIn.js";
import registrationSubmit from "./components/registrationManagement.js";
import useronboardingForm from "./components/userOnboardingForm.js";
import adrForm from "./components/adrForm.js";
import adrList from "./components/adrList.js";
import adronboardingForm from "./components/newADR.js";
import adrSingleUpdate from "./components/getADRByid.js";

const showParentPages = () => {
  //configure routes

  page("/", () => {
    page.redirect("/home");
  });

  page("/home", defaultHomePage, () => {});

  page("/login", userLogin, () => {
    $("#app").append(`<h2>user logged in</h2>`);
  });
  //   page("/profile", profileLoadingPage);

  page("/useronboarding", useronboardingForm, () => {
    $("#app").append(`<h2>user logged in</h2>`);
    console.log("Inside user onboarding");
  });
  page("/adrget", adrList, () => {
    $("#app").append(`<h2>user logged in</h2>`);
    console.log("Inside adr listing");
  });

  page("/displayById/:id", adrSingleUpdate, () => {
    $("#app").append(`<h2>user logged in</h2>`);
    console.log("Inside adr listing");
  });

  page("/adronboarding", adronboardingForm, () => {
    console.log("Inside adr onboarding");
  });

  page("/registration", registrationSubmit, () => {
    $("#registrationId").append(`<h1>Registration Management Page</h1>`);
  });

  page(); // middleware to move next
  page({ hashbang: true });
};

//jquery on ready
$(() => {
  console.log("pages on load ", page);
  showParentPages();
});
