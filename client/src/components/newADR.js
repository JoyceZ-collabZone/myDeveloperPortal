import page from "//unpkg.com/page/page.mjs";
import adrForm from "./adrForm.js";

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

    const adrOnboardingResponse = await response.text();
    console.log(adrOnboardingResponse);

    $("#apisidebar").empty();
    $("#apisidebar").append(
      `<div class="list-group">${adrOnboardingResponse}</div>`
    );
    page.redirect("/registration");

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
