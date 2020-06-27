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
