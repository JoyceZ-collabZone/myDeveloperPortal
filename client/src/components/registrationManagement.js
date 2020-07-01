const registrationSubmit = (ctx, next) => {
  $("#app").empty();
  $("#app").append(`
    
    <div class="container id="registrationId">
    <div class="row">
      <div class="col-5">
        <div class="sidenav">
        <a href="./useronboarding">User Onboarding</a>
        <a href="./adronboarding">ADR Onboarding</a>
            
            <div class="container">
               <a href="./ADRUpdate">ADR Update</a>
        <a href="./ADRDelete">ADR Delete</a>
          <a href="./ADRGet">ADR Display</a>
                 </div>
    </div>         
        </div>
      <div class="col-7">
        <h1>API search</h1>      
        <input type="text" placeholder="Search..">
        </div>   
    </div> 
</div> 
   
`);
  next(); // move to next middleware
};
export default registrationSubmit;
