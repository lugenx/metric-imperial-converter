"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.get("/api/convert", (req, res) => {
    //TODO: handle request here to convert
    const result = convertHandler.convert(); //<-- should take request data
  });
};
