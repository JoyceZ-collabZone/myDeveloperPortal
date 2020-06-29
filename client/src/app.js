import page from "//unpkg.com/page/page.mjs";

page.configure({ window: window }); // bind to main window

//frontend components
import defaultHomePage from "./components/defaultHomePage.js";
import userLogin from "./components/userSignIn.js";
import registrationSubmit from "./components/registrationManagement.js";
import useronboardingSubmit from "./components/userOnboardingForm.js";
// import profileLoadingPage from "./components/profileListing.js";
const showParentPages = () => {
    //configure routes

    page("/", () => {
        page.redirect("/home");
    });

    page("/home", defaultHomePage, () => {
        $("#app").append(`<h2> test</h2>`);
    });

    page("/login", userLogin);
    page("/registration", registrationSubmit);
    page("/useronboarding", useronboardingSubmit);

    page({ hashbang: true });
};

//jquery on ready
$(() => {
    console.log("pages ", page);
    showParentPages();
});