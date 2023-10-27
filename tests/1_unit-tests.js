const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  test("should correctly read a whole number input", () => {
    assert(convertHandler.getNum("25kg"), 25);
  });
});
