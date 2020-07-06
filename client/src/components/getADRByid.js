import page from "//unpkg.com/page/page.mjs";

import adrForm from "./adrForm.js";

const getbyIdResponse = async (ctx, next) => {
  //get by id
  //   const adrIdentifer = ctx.params.id;
  console.log("context id logging", ctx.params.id);
  try {
    const response = await fetch(`/api/ADRMetadata/${ctx.params.id}`, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(adrInputFormData),
    });

    const data = await response.json();
    console.log("logging adr response", data);
    $("#username").val(data.username);
    $("#password").val(data.password);
    $("#legalEntityName").val(data.legalEntityName);
    $("#entitydesc").val(data.legalEntityDescription);
    $("#industry").val(data.industry);
    $("#entitylogo").val(data.legalEntityLogoURL);
    $("#drproduct").val(data.dataRecipientProduct);
    $("#drproductdes").val(data.dataRecipientProductDescription);
    $("#drproductstatus").val(data.dataRecipientProductStatus);
  } catch (error) {
    console.log("logging get by ID error", error);
  }
};

const updatedADR = async (ctx, next) => {
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

      const adrUpdateResponse = await response.json();
      console.log("looging adr update response", adrUpdateResponse);

      $("#apisidebar").empty();
      $("#apisidebar").append(
        `<div class="list-group"><h3>${adrUpdateResponse.username} has been updated successfully</h3></div>`
      );

      // page.redirect("./adrget");
    } catch (error) {
      console.log("adr update error", error);
    }

    // page.redirect("/home");
  };

  //   console.log("context logging new", ctx);
  const adr = adrForm(updateADRSubmitHandler, "Update Existing ADR");
  $("#apisidebar").empty();
  $("#apisidebar").append(adr);
  getbyIdResponse(ctx);
};

export default updatedADR;
