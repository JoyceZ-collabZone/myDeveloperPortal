const useronboardingSubmitHandler = async(formUserInputData) => {
    try {
        const response = await fetch("/api/user/new", {
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
        printProfileListing();
        page.redirect("/home");
    } catch (error) {
        console.log("login submit", error);
    }
};

const useronboardingForm = (ctx, next) => {
    $("#app").empty();
    $("#app").append(`
    <div class="col-12 col-md-6 offset-md-3">
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
    $("#profile").append(profileListingTag);

    $("#form-createUser").submit((event) => {
        event.preventDefault();

        const userInputFormData = {
            username: $("#username").val(),
            password: $("#password").val(),
            profile: $("#profile").val(),
        };
        console.log(userInputFormData);
        useronboardingSubmitHandler(userInputFormData);
        printProfileListing();
    });
};

export default useronboardingForm;