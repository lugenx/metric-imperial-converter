function ConvertHandler() {
  this.getNum = function (input) {
    let result;

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
    let str = input.match(/[^\d\/.,\s]+/g)[0];
    const lowerCaseUnit = str === "L" ? str : str.toLowerCase();
    return lowerCaseUnit;
  };

  this.getReturnUnit = function (initUnit) {
    const lowerCaseInitUnit = initUnit.toLowerCase();
    const returnUnitMap = {
      gal: "L",
      lbs: "kg",
      mi: "km",
      l: "gal",
      kg: "lbs",
      km: "mi",
    };

    return returnUnitMap[lowerCaseInitUnit];
  };

  this.spellOutUnit = function (unit) {
    const lowerCaseUnit = unit.toLowerCase();
    const spellOutMap = {
      gal: "gallons",
      lbs: "pounds",
      mi: "miles",
      l: "liters",
      kg: "kilograms",
      km: "kilometers",
    };

    return spellOutMap[lowerCaseUnit];
  };

  this.convert = function (initNum, initUnit) {
    const lowerCaseInitUnit = initUnit.toLowerCase();
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    const conversionMap = {
      gal: initNum * galToL,
      lbs: initNum * lbsToKg,
      mi: initNum * miToKm,
      l: initNum / galToL,
      kg: initNum / lbsToKg,
      km: initNum / miToKm,
    };
    const converted = conversionMap[lowerCaseInitUnit];

    return Number(converted.toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    const lowerCaseInitUnit =
      initUnit === "L" ? initUnit : initUnit.toLowerCase();
    const spelledOutInitUnit = this.spellOutUnit(lowerCaseInitUnit);
    const spelledOutReturnUnit = this.spellOutUnit(returnUnit);
    let result = `${initNum} ${spelledOutInitUnit} converts to ${returnNum} ${spelledOutReturnUnit}`;

    return result;
  };
}

module.exports = ConvertHandler;
