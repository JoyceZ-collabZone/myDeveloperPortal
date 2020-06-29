const express = require("express");
const userRouterMiddleware = express.Router(); // router level middleware
const UserModel = require("../models/User");
const bcrypt = require("bcryptjs");

// post new user endpoint
//step 4, await and .then cannot coexist
userRouterMiddleware.post("/new", async (request, response) => {
  console.log("user/new");
  console.log("request.body is", request.body);
  //   response.send("Okay");

  request.body.password = await bcrypt
    .hash(request.body.password, 10)
    .catch((error) => {
      console.log("error", error);
    }); // save encrypted password

  console.log("password check", request.body);
  // model.create, document to insert
  const createdUserDoc = await UserModel.create(request.body).catch((error) => {
    console.log("catch errors", error);

    response.status(500);
  });
  console.log("response is ", createdUserDoc);
  //   let userData;
  //   createdUserDoc.then((data) => {
  //     userData = data;
  //     response.send(data);
  //     console.log(`user ${request.body.username} has been created`);
  //   });
  //   createdUserDoc.catch(console.log("error occured during user creation"));
  if (createdUserDoc) {
    response.send(createdUserDoc);
  } else {
    response.status(500);
  }
});

// post login endpoint

// get logout endpoint

module.exports = userRouterMiddleware;


username: {
  type: String,
  required: true,
},
password: {
  type: String,
  required: true,
},
profile: {
  type: String,
  enum: profileOption,
  required: true,
},
legalEntityId: {
  type: String,
  required: false,
},

legalEntityName: {
  type: String,
  required: false,
},
industry: {
  type: String,
  required: false,
},
logoUri: {
  type: String,
  required: false,
},

//   dataRecipientProducts: [
//     {
//       type: mongoose.Schema.ObjectId,
//       ref: "SoftwareProductModel",
//     },
//   ],
status: {
  type: String,
  required: false,
},

lastUpdated: {
  type: String,
  required: false,
},
});

<div class="topContainer">
      <div id="appWrapper"></div>
      <h1>heading</h1>
      <p>test css</p>
    </div>
    <div class="navBar">
      <div id="navbarid"></div>
      <h1>nav bar</h1>
      <p>test navbar</p>
    </div>
    <form id="form-onboarding" class="userform">
      <div class="form-group">
        <label for="username">user name</label>
        <input
          type="text"
          class="form-control"
          id="usernameid"
          placeholder="Eric"
          name="username"
        />
      </div>
      <div class="form-group">
        <label for="password">password</label>
        <input
          type="password"
          class="form-control"
          id="passwordid"
          name="passwordname"
          placeholder="password..."
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect2">profile selection</label>
        <select multiple class="form-control" id="profileid">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>