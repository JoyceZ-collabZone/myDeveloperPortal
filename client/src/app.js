import page from "//unpkg.com/page/page.mjs";

page.configure({ window: window }); // bind to main window

//components
import userOnboardingForm from "./components/commonOnboardingForm";

const showPages = () => {
  //configure routes

  page("/", () => {
    $("#appWrapper").append("<h1>Home Route Reached</h1>");
  });

  //   page("/home", nav, () => {
  //     $("#app").append("<h1>Home Route Reached</h1>");
  //   });

  page({ hashbang: true });
};

//jquery on ready
$(() => {
  showPages();
});
