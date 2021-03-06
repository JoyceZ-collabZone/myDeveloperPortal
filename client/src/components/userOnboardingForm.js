import page from "//unpkg.com/page/page.mjs";
import profileLoadingPage from "./profileListing.js";

const useronboardingSubmitHandler = async (userInputFormData) => {
  try {
    const response = await fetch("/api/user/new", {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInputFormData),
    });

    const userLoginResponse = await response.json();
    console.log(userLoginResponse);
    const { message } = userLoginResponse;
    console.log(message);
    // page.redirect("/registration");
    // page.redirect("/home");
    $("#form-createUser").hide();
    $("#success-message").html(`<h3>${message}</h3>`);
  } catch (e) {
    console.log("login submit error block", e);
    return [];
  }
};

const useronboardingForm = (ctx, next) => {
  $("#app").empty();
  $("#app").append(`
    <div class="col-12 col-md-6 offset-md-3">
    <div id="success-message"></div>
    <form  id="form-createUser" name="registrationForm">
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
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
    `);
  //   $("#profile").append(profileListingTag);
  profileLoadingPage();

  $("#form-createUser").submit((event) => {
    event.preventDefault();

    const userInputFormData = {
      user: {
        username: $("#username").val(),
        password: $("#password").val(),
      },
      profileId: $("#profile").val(),
    };

    // {

    //     "user": {
    //     "username": "testuser680",
    //     "password":"12345"},
    //     "profileId": "5ef6d08df37bd72e443b47b8"
    // }

    console.log("logging user input", userInputFormData);
    useronboardingSubmitHandler(userInputFormData);
    // printProfileListing();
  });
};

export default useronboardingForm;
