function ConvertHandler() {
  this.getNum = function (input) {
    let result;

    let nonUnitPart = input.match(/^(.*?)(?=[a-zA-Z]+$)/)[0];

    if (nonUnitPart.indexOf("/") !== nonUnitPart.lastIndexOf("/")) return false;
    if (nonUnitPart.indexOf(".") !== nonUnitPart.lastIndexOf(".")) return false;

    if (nonUnitPart.length < 1) return 1;
    if (nonUnitPart.includes("/")) {
      const arr = nonUnitPart.split("/");

      result = parseFloat(arr[0]) / parseFloat(arr[1]);
    } else {
      result = parseFloat(input) || 1;
    }
    return result;
  };

  this.getUnit = function (input) {
    let str = input.match(/[a-zA-Z]+$/)[0];

    let correctedStr;

    if (str === "l" || str === "L") {
      correctedStr = str.toUpperCase();
    } else {
      correctedStr = str.toLowerCase();
    }

    return correctedStr;
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

    const numberIsValid = initNum;

    const unitIsValid = Object.keys(conversionMap).includes(initUnit);

    if (!numberIsValid && !unitIsValid) {
      throw Error("invalid number and unit");
    }

    if (!numberIsValid) {
      throw Error("invalid number");
    }

    if (!unitIsValid) {
      throw Error("invalid unit");
    }

    const converted = conversionMap[initUnit];

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
