import profileLoadingPage from "./profileListing.js";
profileLoadingPage();
const adrForm = (formSubmit, buttonLable) => {
  $(document).on("submit", "#form-createADR", (e) => {
    e.preventDefault();
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
    formSubmit(adrInputFormData);
    // printProfileListing();
  });

  // template
  return `

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
                <button type="submit" class="btn btn-primary btn-block btn-flat login-btn">
                ${buttonLable}
                </button>
            </form>
        </div>
    </div>
</div>
`;
};

export default adrForm;
