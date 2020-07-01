import page from "//unpkg.com/page/page.mjs";
const userSubmitSigninHandler = async (formUserInputData) => {
  // submit handler is async, can use await and .then
  try {
    const response = await fetch("/api/user/login", {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formUserInputData),
    });

    const userLoginResponse = await response.json();
    console.log(userLoginResponse);
    page.redirect("/registration");
  } catch (error) {
    console.log("login submit", error);
  }
};

const userLogin = (ctx, next) => {
  // context, lots of information about incoming request
  $("#app").empty();
  $("#app").append(`
  <div class="col-12 col-md-6 offset-md-3">
  <form name="registrationForm" id="formId">
      <div class="row">
          <div class="col-md-6 col-12">
              <div class="form-group">
                  <label for="username">User name</label>
                  <input type="text" class="form-control" id="username" placeholder="entry user name..." name="usernameName" />
              </div>
          </div>
          <div class="col-md-6 col-12">
              <div class="form-group">
                  <label for="passoword">Password</label>
                  <input type="password" class="form-control" id="password" name="password" />
              </div>
          </div>
      </div>

      <div class="row" id="profileContainer">
      <div class="col-md-6 col-12">
              <div class="form-group">
                  <label for="profile">User profile</label>
                  <input type="text" class="form-control" id="profile" name="profileName" />
              </div>
          </div>
      </div>
<button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
    

    `);

  $("#formId").submit((event) => {
    event.preventDefault();

    const userInputFormData = {
      username: $("#username").val(),
      password: $("#password").val(),
    };
    console.log(userInputFormData);
    userSubmitSigninHandler(userInputFormData);
  });
};

export default userLogin;
