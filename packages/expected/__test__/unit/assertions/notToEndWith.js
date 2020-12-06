"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when not ended with, wrapper must be returned", () => {
      {
        const w = expected("ciao mondo!");
        assert.strictEqual(w.notToEndWith("MONDO!"), w);
      }
    });
    test("when ended with, assertion error must be raised", () => {
      {
        assert.throws(() => {
          {
            expected("ciao mondo!").notToEndWith("mondo!");
          }
        });
      }
    });
  }
});