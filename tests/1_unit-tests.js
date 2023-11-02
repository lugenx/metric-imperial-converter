const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  test("convertHandler should correctly read a whole number input", () => {
    assert.strictEqual(convertHandler.getNum("25kg"), 25);
  });

  test("convertHandler should correctly read a decimal number input", () => {
    assert.strictEqual(convertHandler.getNum("3.14lbs"), 3.14);
  });

  test("convertHandler should correctly read a fractional input", () => {
    assert.strictEqual(convertHandler.getNum("13/44gal"), 13 / 44);
  });

  test("convertHandler should correctly read a fractional input with a decimal", () => {
    assert.strictEqual(convertHandler.getNum("7/3.14mi"), 7 / 3.14);
  });

  // TODO: Fix this in code, so it can be tested with this?
  //   test("convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)", () => {
  //     assert.throws(convertHandler.getNum("3/2/3l"), Error, "");
  //   });
});

/**
    convertHandler should correctly read a whole number input.
    convertHandler should correctly read a decimal number input.
    convertHandler should correctly read a fractional input.
    convertHandler should correctly read a fractional input with a decimal.
    convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).
    
    convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.

    convertHandler should correctly read each valid input unit.
    convertHandler should correctly return an error for an invalid input unit.
    convertHandler should return the correct return unit for each valid input unit.
    convertHandler should correctly return the spelled-out string unit for each valid input unit.
    convertHandler should correctly convert gal to L.
    convertHandler should correctly convert L to gal.
    convertHandler should correctly convert mi to km.
    convertHandler should correctly convert km to mi.
    convertHandler should correctly convert lbs to kg.
    convertHandler should correctly convert kg to lbs.

 */
