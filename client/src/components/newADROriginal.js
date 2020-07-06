import profileLoadingPage from "./profileListing.js";

import page from "//unpkg.com/page/page.mjs";
const adronboardingSubmitHandler = async (adrInputFormData) => {
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

    const adrLoginResponse = await response.json();
    console.log(adrLoginResponse);
    printProfileListing();
  } catch (e) {
    console.log("adr login submit error block", e);
    return [];
  }
  page.redirect("/registration");
};

const adronboardingForm = (ctx, next) => {
  $("#apisidebar").empty();
  $("#apisidebar").append(`
    
    <div class="container container-sm">
    <div class="row">
        <div class="col-12 col-md-6 offset-md-3">
            <form name="registrationForm" id="form-createADR">

                <div class="row">
                    <div class="col-md-6 col-12">
                        <div class="form-group">
                            <label for="username">User name</label>
                            <input type="text" class="form-control" id="username" name="usernameName" />
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="form-group">
                            <label for="passoword">Password</label>
                            <input type="password" class="form-control" id="password" name="passwordName" />
                        </div>
                    </div>
                </div>



                <div class="form-group">
                    <label for="exampleFormControlSelect2">Profile selection</label>
                    <select multiple class="form-control" id="profile">
                    </select>
                </div>

                <div class="row">
                    <div class="col-md-6 col-12">
                        <div class="form-group">
                            <label for="entityname">Legal Entity Name</label>
                            <input type="text" class="form-control" id="entityname" name="entityName" />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="form-group has-feedback">
                            <label for="entitydesc">Legal Entity Description</label>
                            <input type="text" class="form-control" id="entitydesc" name="DescriptionName" />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 col-12">
                        <div class="form-group has-feedback">
                            <label for="entitylogo">Legal Entity Logo URL</label>
                            <input type="text" class="form-control" id="entitylogo" name="logoName" />
                        </div>
                    </div>



                    <div class="col-md-6 col-12">
                        <div class="form-group has-feedback">
                            <label for="industry">Industry</label>
                            <input type="text" class="form-control" id="industry" name="industryName" />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 col-12">
                        <div class="form-group">
                            <label for="dataRecipientProducts">dataRecipientProducts</label>
                            <input type="text" class="form-control" id="drproduct" name="dataRecipientProductsName" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="dataRecipientProductsDescription">dataRecipientProducts
                                Description</label>
                            <input type="text" class="form-control" id="drproductdes"
                                name="dataRecipientProductsDesName" />
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col-md-6 col-12">
                        <div class="form-group">
                            <label for="dataRecipientProducts">dataRecipientProducts
                                Status</label>
                            <input type="text" class="form-control" id="drproductstatus"
                                name="dataRecipientProductsStatusName" />
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-block btn-flat login-btn">Sumit
                </button>
            </form>
        </div>
    </div>
</div>
 
    `);
  profileLoadingPage();

  $("#form-createADR").submit((event) => {
    event.preventDefault();

    const adrInputFormData = {
      username: $("#username").val(),
      password: $("#password").val(),
      profile: $("#legalEntityName").val(),
      legalEntityName: $("#entitydesc").val(),
      industry: $("#industry").val(),
      legalEntityLogoURL: $("#entitylogo").val(),
      dataRecipientProduct: $("#drproduct").val(),
      dataRecipientProductDescription: $("#drproductdes").val(),
      dataRecipientProductStatus: $("#drproductstatus").val(),
    };

    // {

    //     "user": {
    //     "username": "testuser680",
    //     "password":"12345"},
    //     "profileId": "5ef6d08df37bd72e443b47b8"
    // }

    console.log("logging ADR onboarding input", adrInputFormData);
    adronboardingSubmitHandler(adrInputFormData);
    // printProfileListing();
  });
};

export default adronboardingForm;
