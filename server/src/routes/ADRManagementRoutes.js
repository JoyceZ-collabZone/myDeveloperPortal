const express = require("express");
const ADRMetadataRouterMiddleware = express.Router(); // router level middleware
const ADRMetadataModel = require("../models/ADRMetadata");
const bcrypt = require("bcryptjs");

// post new user endpoint
//step 4, await and .then cannot coexist, response send once only
ADRMetadataRouterMiddleware.post("/new", async (request, response) => {
  try {
    const createdADRMetadataDocInMongo = await ADRMetadataModel.create(
      request.body
    );
    console.log("logging request", createdADRMetadataDocInMongo);
    response
      .status(200)
      .send(`ADR"${request.body.username}" created successfully`);
  } catch (error) {
    console.log("catch error for user creation route ", error);
    response.status(500).send("user creation failed");
  }
});

module.exports = ADRMetadataRouterMiddleware;
