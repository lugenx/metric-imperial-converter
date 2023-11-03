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

  test("convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)", () => {
    assert.throws(
      () => {
        convertHandler.checkInput("3/2/3l");
      },
      Error,
      /invalid number/
    );
  });

  test("convertHandler should correctly read each valid input unit", () => {
    const INPUT_UNITS = ["L", "l", "kg", "km", , "gal", , "lbs", , "mi"];
    const EXPECTED_UNITS = ["L", "L", "kg", "km", , "gal", , "lbs", , "mi"];

    for (let i = 0; i < INPUT_UNITS.length; i++) {
      assert.strictEqual(
        convertHandler.getUnit(`5${INPUT_UNITS[i]}`),
        `${EXPECTED_UNITS[i]}`
      );
    }
  });

  test("convertHandler should correctly return an error for an invalid input unit", () => {
    assert.throws(
      () => {
        convertHandler.checkInput("23p");
      },
      Error,
      /invalid unit/
    );
  });

  test("convertHandler should correctly read each valid input unit", () => {
    const INPUT_UNITS = ["L", "l", "kg", "km", "gal", "lbs", "mi"];
    const EXPECTED_UNITS = ["L", "L", "kg", "km", "gal", "lbs", "mi"];

    for (let i = 0; i < INPUT_UNITS.length; i++) {
      assert.strictEqual(
        convertHandler.getUnit(`5${INPUT_UNITS[i]}`),
        `${EXPECTED_UNITS[i]}`
      );
    }
  });

  test("convertHandler should return the correct return unit for each valid input unit", () => {
    const INPUT_UNITS = ["L", "l", "kg", "km", "gal", "lbs", "mi"];
    const EXPECTED_UNITS = ["gal", "gal", "lbs", "mi", "L", "kg", "km"];

    for (let i = 0; i < INPUT_UNITS.length; i++) {
      assert.strictEqual(
        convertHandler.getReturnUnit(INPUT_UNITS[i]),
        EXPECTED_UNITS[i]
      );
    }
  });

  test("convertHandler should correctly return the spelled-out string unit for each valid input unit", () => {
    const INPUT_UNITS = ["gal", "lbs", "mi", "l", "kg", "km"];
    const EXPECTED_UNITS = [
      "gallons",
      "pounds",
      "miles",
      "liters",
      "kilograms",
      "kilometers",
    ];

    for (let i = 0; i < INPUT_UNITS.length; i++) {
      assert.strictEqual(
        convertHandler.spellOutUnit(INPUT_UNITS[i]),
        EXPECTED_UNITS[i]
      );
    }
  });

  test("convertHandler should correctly convert gal to L", () => {
    assert.strictEqual(convertHandler.convert("5", "gal"), 18.92705);
  });

  test("convertHandler should correctly convert L to gal", () => {
    assert.strictEqual(convertHandler.convert("6", "L"), 1.58503);
  });

  test("convertHandler should correctly convert mi to km", () => {
    assert.strictEqual(convertHandler.convert("7", "mi"), 11.26538);
  });

  test("convertHandler should correctly convert km to mi", () => {
    assert.strictEqual(convertHandler.convert("8", "km"), 4.97098);
  });

  test("convertHandler should correctly convert lbs to kg", () => {
    assert.strictEqual(convertHandler.convert("9", "lbs"), 4.08233);
  });

  test("convertHandler should correctly convert kg to lbs", () => {
    assert.strictEqual(convertHandler.convert("10", "kg"), 22.04624);
  });
});
