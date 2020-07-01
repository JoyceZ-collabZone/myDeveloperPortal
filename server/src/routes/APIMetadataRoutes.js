const express = require("express");
const apiRouterMiddleware = express.Router(); // router level middleware
const apimetadatamodel = require("../models/APIMetadata");

apiRouterMiddleware.get("/", async (request, response) => {
  const apiResponseDocs = await apimetadatamodel.find({});
  response.send(apiResponseDocs);
  console.log(apiResponseDocs);
});

apiRouterMiddleware.get("/:id", async (request, response) => {
  const oneapiResponseDoc = await apimetadatamodel.findOne({
    _id: request.params.id,
  });
  response.send(oneapiResponseDoc);
  console.log(oneapiResponseDoc);
});

module.exports = apiRouterMiddleware;
