const userSubmitSigninHandler = async(formUserInputData) => {
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
        page.redirect("/home");
    } catch (error) {
        console.log("login submit", error);
    }
};

const userLogin = (ctx, next) => {
    $("#app").empty();
    $("#app").append(`
    <div class="col-12 col-md-6 offset-md-3">
    <form action="/register" method="post" name="registrationForm">
        <div class="row">
            <div class="col-md-6 col-12">
                <div class="form-group has-feedback">
                    <label for="username">User name</label>
                    <input type="text" class="form-control" name="usernameName" />
                </div>
            </div>
            <div class="col-md-6 col-12">
                <div class="form-group has-feedback">
                    <label for="passoword">Password</label>
                    <input type="password" class="form-control" name="passwordName" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-12">
                <div class="form-group has-feedback">
                    <label for="profile">User profile</label>
                    <input type="text" class="form-control" name="entityName" />
                </div>
            </div>
        </div>
    </form>
</div>
    

    `);

    $("#form-login").submit((event) => {
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