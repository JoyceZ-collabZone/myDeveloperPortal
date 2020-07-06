import page from "//unpkg.com/page/page.mjs";
import adrForm from "./adrForm.js";
// import profileLoadingPage from "./profileListing";

const newADRSubmitHandler = async (adrInputFormData) => {
  try {
    const response = await fetch("/api/ADRMetadata/new", {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adrInputFormData),
    });

    const { message } = await response.json();

    $("#apisidebar").empty();
    $("#apisidebar").append(
      `<div class="list-group"><h3>${message}</h3></div>`
    );

    // page.redirect("./adrget");
  } catch (error) {
    console.log("adr onboarding error", error);
  }
};

const newADR = async () => {
  const adr = adrForm(newADRSubmitHandler, "Create New ADR");
  $("#apisidebar").empty();
  $("#apisidebar").append(adr);
};
// {

//     "user": {
//     "username": "testuser680",
//     "password":"12345"},
//     "profileId": "5ef6d08df37bd72e443b47b8"
// }

export default newADR;
