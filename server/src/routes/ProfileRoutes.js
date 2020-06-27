const express = require("express");
const profileRouterMiddleware = express.Router(); // router level middleware
const ProfileModel = require("../models/Profile");

// post new user endpoint
//step 4, await and .then cannot coexist, response send once only
profileRouterMiddleware.post("/new", async (request, response) => {
  try {
    const createdProfileDocInMongo = await ProfileModel.create(request.body);
    response
      .status(200)
      .send(`profile "${createdProfileDocInMongo}" created successfully`);
  } catch (error) {
    console.log("catch error for user creation route ", error);
    response.status(500).send("profile creation failed");
  }
});
// post login endpoint

// get routes
profileRouterMiddleware.get("/", async (request, response) => {
  const AllProfileResponseDocs = await ProfileModel.find({});
  response.send(AllProfileResponseDocs);
});

profileRouterMiddleware.get("/:id", async (request, response) => {
  const oneProfileResponseDoc = await ProfileModel.findOne({
    _id: request.params.id,
  });
  response.send(oneProfileResponseDoc);
});

module.exports = profileRouterMiddleware;
