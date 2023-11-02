"use strict";

const expect = require("chai").expect;

const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.get("/api/convert", (req, res) => {
    const input = req.query.input;

    try {
      convertHandler.checkInput(input);
      const initNum = convertHandler.getNum(input);
      const initUnit = convertHandler.getUnit(input);
      const returnNum = convertHandler.convert(initNum, initUnit);
      const returnUnit = convertHandler.getReturnUnit(initUnit);
      const string = convertHandler.getString(
        initNum,
        initUnit,
        returnNum,
        returnUnit
      );

      let result = { initNum, initUnit, returnNum, returnUnit, string };

      res.json(result);
    } catch (error) {
      res.send(error.message);
    }
  });
};
