const defaultHomePage = (ctx, next) => {
  $("#app").empty();
  $("#app").append(`<div class="topLevelContainer" id="wrapperContainerId">
  
    <div class="container-fluid" id="bodyContainerId">
        <div class="row">
                 </div>
            <div class="col-12">
                <h1>Welcome to Developer Portal</h1>
                <div>
                    <p>Our strong API foundations have given us an ability to deliver great customer experiences and we now want you to benefit from the API portal as well.</p>
                    <p>We can’t wait to see what you register with us!</p>
                </div>
                             
                           </div>
                           <div class="buttoncontainer">
                           <div class="center">
                              <a href="/registration" class="dropbtn">Main Page</a>
                          </div>
                </div>
        </div>
    </div>`);

  next(); // move onto next middleware
};

export default defaultHomePage;
