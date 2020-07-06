import page from "//unpkg.com/page/page.mjs";

import adrForm from "./adrForm.js";

// const getbyIdResponse = async (ctx, next) => {
//   //get by id
//   //   const adrIdentifer = ctx.params.id;
//   console.log("context id logging", ctx.params.id);
//   try {
//     const response = await fetch(`/api/ADRMetadata/${ctx.params.id}`, {
//       method: "GET",
//       mode: "cors",
//       credentials: "same-origin",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       // body: JSON.stringify(adrInputFormData),
//     });

//     const data = await response.json();
//     console.log("logging adr response", data);

//     // $("#apisidebar").empty();
//     // $("#apisidebar").append(`<div class="list-group">${adrGetResponse}</div>`);
//     //   page.redirect("/registration");

//     // page.redirect("./adrget");

//     $("#apisidebar").empty();
//     $("#apisidebar").append(data);
//   } catch (error) {
//     console.log("logging get by ID error", error);
//   }
// };

const updateADRSubmitHandler = async (adrInputFormData) => {
  try {
    const response = await fetch(`/api/ADRMetadata/update/${ctx.params.id}`, {
      method: "PATCH",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adrInputFormData),
    });

    const adrUpdateResponse = await response.text();
    console.log("looging adr update response", adrUpdateResponse);

    $("#apisidebar").empty();
    $("#apisidebar").append(
      `<div class="list-group">${adrUpdateResponse}</div>`
    );
    page.redirect("/registration");

    // page.redirect("./adrget");
  } catch (error) {
    console.log("adr update error", error);
  }

  // page.redirect("/home");
};
const updatedADR = async (ctx, next) => {
  //   console.log("context logging new", ctx);
  const adr = adrForm(updateADRSubmitHandler, "Update Existing ADR");
  $("#apisidebar").empty();
  $("#apisidebar").append(adr);
  getbyIdResponse(ctx);
};
export default updatedADR;
