const chaiHttp = require("chai-http");
const chai = require("chai");
let assert = chai.assert;
const server = require("../server");

chai.use(chaiHttp);

suite("Functional Tests", function () {
  test("should convert a valid input such as 10L", async function () {
    const res = await chai.request(server).get("/api/convert?input=10L");
    assert.isObject(res.body);
    assert.strictEqual(res.body.returnNum, 2.64172);
  });

  test("should return error with invalid unit for 32g", async function () {
    const res = await chai.request(server).get("/api/convert?input=32g");
    assert.equal(res.text, "invalid unit");
  });

  test("should return error with invalid number for 3/7.2/4kg", async function () {
    const res = await chai.request(server).get("/api/convert?input=3/7.2/4kg");
    assert.equal(res.text, "invalid number");
  });

  test("should return error with invalid number and unit for 3/7.2/4kilomegagram", async function () {
    const res = await chai
      .request(server)
      .get("/api/convert?input=3/7.2/4kilomegagram");
    assert.equal(res.text, "invalid number and unit");
  });

  test("should convert with no number such as kg", async function () {
    const res = await chai.request(server).get("/api/convert?input=kg");
    assert.isObject(res.body);
    assert.strictEqual(res.body.returnNum, 2.20462);
  });
});
