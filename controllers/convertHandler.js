function ConvertHandler() {
  this.getNum = function (input) {
    let result;
    console.log("----raw input-- ", input);
    if (input.split("").filter((e) => e === "/").length > 1)
      throw Error("Invalid number");

    if (input.length < 1) return 1;
    if (input.includes("/")) {
      const arr = input.split("/");

      result = parseFloat(arr[0]) / parseFloat(arr[1]);
    } else {
      result = parseFloat(input) || 1;
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
