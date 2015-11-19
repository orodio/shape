var expect = require("chai").expect
var Types = require("./types")
var pairs = require("./pairs").pairs
var each = require("lodash/collection/each")
var filter = require("lodash/collection/filter")

function only   (type) { return filter(pairs, d => d[0] === type) }
function except (type) { return filter(pairs, d => d[0] !== type) }

function isTrue (val) { return expect(val).to.be.true }
function isFalse (val) { return expect(val).to.be.false }

function validatePair (fn, check) {
  return function (d, i) {
    it (`${ i } is ${ d[0] }`, () => check(fn(d[1]) ))
  }
}

function group (desc, type, fn, fail) {
  var fnr = fn.isRequired

  var testTrue  = fail ? isFalse : isTrue
  var testFalse = fail ? isTrue : isFalse

  describe (desc, () => {
    it ("is NOT required", () => testTrue(fn()) )
    it ("is required",      () => testFalse(fnr()))
    describe("pairs", () => {
      describe("valid",   () => each(only(type),   validatePair(fnr, testTrue)))
      describe("invalid", () => each(except(type), validatePair(fnr, testFalse)))
    })
  })
}

describe("types", () => {
  group("string", "string", Types.string)
  group("number", "number", Types.number)
  group("boolean", "boolean", Types.bool)
})
