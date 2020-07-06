const express = require("express");
const userRouterMiddleware = express.Router(); // router level middleware
const UserModel = require("../models/User");
const bcrypt = require("bcryptjs");
const profileModel = require("../models/Profile");
const profileRouterMiddleware = require("./profileRoutes");

// post new user endpoint
//step 4, await and .then cannot coexist, response send once only
userRouterMiddleware.post("/new", async (request, response) => {
  console.log("bodypassword", request.body.user.password);
  try {
    request.body.user.password = await bcrypt
      .hash(request.body.user.password, 10)
      .catch((error) => {
        console.log("bcrypt error", error);
      });

    // model.create, document to insert
    const createdUserDocInMongo = await UserModel.create(request.body.user);
    console.log("logging profile id", request.body.profileId);
    const getProfileDoc = await profileModel.find({
      _id: request.body.profileId,
    });
    // }); {
    //     user: { user, password },
    //     profile: { name: "profileName" }
    // }
    console.log("logging getProfileDoc", getProfileDoc.length, getProfileDoc);

    if (getProfileDoc.length > 1) {
      getProfileDoc.forEach((profileindex) => {
        createdUserDocInMongo.profile.push(profileindex);
      });
      createdUserDocInMongo.save(); // loop and save
    } else {
      getProfileDoc.forEach((profileindex) => {
        createdUserDocInMongo.profile.push(profileindex);
      });
      createdUserDocInMongo.save(); // loop and save
      // console.log("else for single response start");
      // createdUserDocInMongo.profile.push(getProfileDoc);
      // createdUserDocInMongo.save();
      // console.log("joint response", createdUserDocInMongo);

      // createdUserDocInMongo.profile.push(getProfileDoc);

      // console.log("joint response", singleProfileResponse);

      // response.send(createdUserDocInMongo);
    }
    response.status(200).send({
      message: `user "${request.body.user.username}" created successfully`,
    });
  } catch (error) {
    console.log("catch error for user creation route ", error);
    response.status(500).send("user creation failed");
  }
});
// post login endpoint

userRouterMiddleware.post("/login", async (request, response) => {
  try {
    const returnedUserDocFromUserModel = await UserModel.findOne({
      username: request.body.username,
    });

    let status = 400;
    let message = "failed to log in, please try again";

    if (
      returnedUserDocFromUserModel &&
      (await bcrypt.compare(
        request.body.password,
        returnedUserDocFromUserModel.password
      ))
    ) {
      // create a session object for the user
      request.session.sessionUser = {
        sessionUserName: returnedUserDocFromUserModel.username,
        sessionUserIdentifier: returnedUserDocFromUserModel._id,
        sessionCreated: true,
      };
      status = 200;
      message = JSON.stringify(request.session.sessionUser);
      console.log(request.session.sessionUser);
      //   response.status(status).send(`${message}`);
    }
    response.status(status).send(`${message}`);
  } catch (error) {
    console.log("catch error for user login route ", error);
    response.status(500).send(`user login failed`);
  }
});

// get logout endpoint
userRouterMiddleware.get("/logout", (request, response) => {
  console.log("logging out ", request.session.sessionUser);
  request.session.destroy(() => {
    response.send("user has logged out");
  });
});

// get routes
userRouterMiddleware.get("/", async (request, response) => {
  const AllUserResponseDocs = await UserModel.find({}).populate("profile");
  response.send(AllUserResponseDocs);
});

userRouterMiddleware.get("/:id", async (request, response) => {
  const oneUserResponseDoc = await UserModel.findOne({
    _id: request.params.id,
  }).populate();
  response.send(oneUserResponseDoc);
});

// add Profile to User

userRouterMiddleware.post("/addNewProfile", async (request, response) => {
  try {
    const userDoc = await UserModel.findOne({
      _id: request.body.UserId,
    });
    console.log(
      `logging user document as per "userId" ${request.body.UserId} in ${userDoc}`
    );

    const profileDoc = await profileModel.findOne({
      _id: request.body.ProfileId,
    });

    console.log(
      `logging profiledoc as per "profileId" ${request.body.ProfileId} in ${profileDoc}`
    );

    if (!userDoc || !profileDoc) {
      response.status(400).send("bad request for adding profile to user");
    } else {
      userDoc.profile.push(profileDoc); //add profile to user item array
      const updatedUserDocwithProfile = await userDoc.save(); //save to datase
      response.json(updatedUserDocwithProfile);
      console.log(updatedUserDocwithProfile);
    }
  } catch {
    response.status(400).send("bad request");
  }
});

module.exports = userRouterMiddleware;
