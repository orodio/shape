var map = require("lodash/collection/map")
var unique  = require("lodash/array/unique")

var pairs = [
  ["number", 1],
  ["number", 0],
  ["number", -9],
  ["number", -0.5],
  ["number", 5e9],
  ["number", 5e-9],
  ["number", -5e9],
  ["number", -5e-9],

  ["string", "string"],
  ["string", "1"],

  ["boolean", true],
  ["boolean", false],

  ["array", []],
  ["array", [1, 2, 3, 4]],
  ["array", ["o", "t", "t"]],

  ["object", {}],
  ["object", {foo: "bar"}],
  ["object", {a:1, b:2}],
  ["object", new Date()],
  ["object", /foo/],

  ["function", function () {}],
  ["function", Array.isArray],
  ["function", () => {}],
  ["function", v => v],

  ["null", null],

  ["undefined", undefined],
]

var types = unique(map(pairs, d => d[0]))

module.exports = {
  pairs: pairs,
  types: types,
}
