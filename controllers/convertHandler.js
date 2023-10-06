//TODO: should correctly default to a numerical input of 1 when no numerical

function ConvertHandler() {
  this.getNum = function (input) {
    let result;

    if (input.split("").filter((e) => e === "/").length > 1)
      throw Error("Invalid number");

    let str = input.match(/\d+(\.\d+)?(\/\d+)?/g)[0];

    if (str.length < 1) return 1;
    if (str.includes("/")) {
      const arr = str.split("/");

      result = Number(arr[0]) / Number(arr[1]);
    } else {
      result = Number(str);
    }
    return result;
  };

  this.getUnit = function (input) {
    let result = input.match(/[^\d\/.,\s]+/g)[0];
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    const returnUnitMap = {
      gal: "L",
      lbs: "kg",
      mi: "km",
      L: "gal",
      kg: "lbs",
      km: "mi",
    };

    return returnUnitMap[initUnit];
  };

  this.spellOutUnit = function (unit) {
    const spellOutMap = {
      gal: "gallons",
      lbs: "pounds",
      mi: "miles",
      L: "liters",
      kg: "kilograms",
      km: "kilometers",
    };

    return spellOutMap[unit];
  };

  this.convert = function (initNum, initUnits) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    const conversionMap = {
      gal: initNum * galToL,
      lbs: initNum * lbsToKg,
      mi: initNum * miToKm,
      L: initNum / galToL,
      kg: initNum / lbsToKg,
      km: initNum / miToKm,
    };
    const converted = conversionMap[initUnits];

    return Number(converted.toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    const spelledOutInitUnit = this.spellOutUnit(initUnit);
    const spelledOutReturnUnit = this.spellOutUnit(returnUnit);
    let result = `${initNum} ${spelledOutInitUnit} converts to ${returnNum} ${spelledOutReturnUnit}`;

    return result;
  };
}

module.exports = ConvertHandler;
