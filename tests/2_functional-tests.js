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
});
