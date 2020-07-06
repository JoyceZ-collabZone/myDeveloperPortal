import page from "//unpkg.com/page/page.mjs";
const registrationSubmit = (ctx, next) => {
  $("#app").empty();
  $("#app").append(`
    
    <div class="container id="registrationId">
    <div class="row">
      <div class="col-3">
        <div class="sidenav">
        <a href="./useronboarding">User Onboarding</a>
        <a href="./adronboarding">ADR Onboarding</a>
            
            <div class="container">
           
  
          <a href="./adrget">ADR Display</a>
      
                 </div>
    </div>         
        </div>
      <div class="col-8" id="apisidebar">
        <h1>Welcome to ADR management portal</h1>      
        </div>   
    </div> 
</div> 
   
`);
  next(); // move to next middleware
};
export default registrationSubmit;
