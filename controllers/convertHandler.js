function ConvertHandler() {
  this.getNum = function (input) {
    let result = input.match(/\d+/g)[0];
    return result;
  };

  this.getUnit = function (input) {
    // TODO: should correctly read a fractional input with a decimal.
    let result = input.match(/[^\d]+/g)[0];
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
      gal: galToL,
      lbs: lbsToKg,
      mi: miToKm,
      L: galToL,
      kg: lbsToKg,
      km: miToKm,
    };

    return conversionMap[initUnits] * initNum;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    const spelledOutInitUnit = this.spellOutUnit(initUnit);
    const spelledOutReturnUnit = this.spellOutUnit(returnUnit);
    let result = `${initNum} ${spelledOutInitUnit} converts to ${returnNum} ${spelledOutReturnUnit}`;

    return result;
  };
}

module.exports = ConvertHandler;
