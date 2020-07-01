import profileLoadingPage from "./profileListing.js";
const adronboardingSubmitHandler = async (userInputFormData) => {
  try {
    const response = await fetch("/api/ADRMetadata", {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adrformUserInputData),
    });

    const adrLoginResponse = await response.json();
    console.log(adrLoginResponse);
    page.redirect("/home");
  } catch (error) {
    console.log("login submit", error);
  }
};

const adronboardingForm = (ctx, next) => {
  $("#app").empty();
  $("#app").append(`
  <div class="container container-sm">
  <div class="row">
      <div class="col-12 col-md-6 offset-md-3">
          <h1>Register</h1>
      </div>
  </div>
  <div class="row">
      <div class="col-12 col-md-6 offset-md-3">
          <form name="registrationForm">
              <div class="row">
                  <div class="col-md-6 col-12">
                      <div class="form-group">
                          <label for="username">User name</label>
                          <input type="text" class="form-control" name="usernameName" />
                      </div>
                  </div>
                  <div class="col-md-6 col-12">
                      <div class="form-group">
                          <label for="passoword">Password</label>
                          <input type="password" class="form-control" name="passwordName" />
                      </div>
                  </div>
              </div>
      
              <div class="row">
                  <div class="col-md-6 col-12">
                      <div class="form-group">
                          <label for="entityname">Legal Entity Name</label>
                          <input type="text" class="form-control" name="entityName" />
                      </div>
                  </div>
              </div>

                  <div class="row">
                      <div class="col-12">
                          <div class="form-group has-feedback">
                              <label for="entitydescription">Legal Entity Description</label>
                              <input type="text" class="form-control" name="DescriptionName" />
                          </div>
                      </div>
                  </div>

                      <div class="row">
                          <div class="col-md-6 col-12">
                              <div class="form-group has-feedback">
                                  <label for="entitylogo">Legal Entity Logo URL</label>
                                  <input type="text" class="form-control" name="logoName" />
                              </div>
                          </div>


                       
                              <div class="col-md-6 col-12">
                                  <div class="form-group has-feedback">
                                      <label for="industry">Industry</label>
                                      <input type="text" class="form-control" name="industryName" />
                                  </div>
                              </div>
                          </div>

                              <div class="row">
                                  <div class="col-md-6 col-12">
                                      <div class="form-group">
                                          <label for="dataRecipientProducts">dataRecipientProducts</label>
                                          <input type="text" class="form-control"
                                              name="dataRecipientProductsName" />
                                      </div>
                                  </div>
                              </div>
                                  <div class="row">
                                      <div class="col-12">
                                          <div class="form-group">
                                              <label for="dataRecipientProducts">dataRecipientProducts
                                                  Description</label>
                                              <input type="text" class="form-control"
                                                  name="dataRecipientProductsDesName" />
                                          </div>
                                      </div>
                                  </div>


                                      <div class="row">
                                          <div class="col-md-6 col-12">
                                              <div class="form-group">
                                                  <label for="dataRecipientProducts">dataRecipientProducts
                                                      Status</label>
                                                  <input type="text" class="form-control"
                                                      name="dataRecipientProductsStatusName" />
                                              </div>
                                          </div>
                                      </div>



                                          <div>
                                              <div class="checkbox form-group icheck">
                                                  <label><input type="checkbox" name="agreed" /> I agree to the
                                                      <a href="https://www.ausbanking.org.au/privacy-policy/"
                                                          target="_blank">privacy policy</a></label>
                                                  <div class="error-container">
                                                      <span class="required">You must agree to the terms and
                                                          conditions and privacy policy
                                                          to proceed.</span>
                                                  </div>
                                              </div>
                                          </div>

                                          <button type="submit"
                                              class="btn btn-primary btn-block btn-flat login-btn">
                                              Submit
                                          </button>
          </form>
      </div>
  </div>
</div>
</div>
    `);
  //   $("#profile").append(profileListingTag);

  $("#form-createUser").submit((event) => {
    event.preventDefault();

    const userInputFormData = {
      username: $("#username").val(),
      password: $("#password").val(),
    };

    // {

    //     "user": {
    //     "username": "testuser680",
    //     "password":"12345"},
    //     "profileId": "5ef6d08df37bd72e443b47b8"
    // }

    console.log(userInputFormData);
    adronboardingSubmitHandler(userInputFormData);
    // printProfileListing();
  });
};

export default adronboardingForm;
