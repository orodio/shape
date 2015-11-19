var getType = require("./get_type")
var expect = require("chai").expect
var each = require("lodash/collection/each")
var pairs = require("./pairs").pairs
var types = require("./pairs").types

describe ("getType", () => {
  describe("is the correct type", () => {
    each(pairs, (d, i) => {
      it (i + " - match: " + d[0], () => {
        expect(getType(d[1])).to.equal(d[0])
      })
    })
  })

  describe("is not any other type", () => {
    each(pairs, (p, i) => {
      each(types, (t, ii) => {
        var type = p[0]
        var value = p[1]
        if (t === type) return it(`${ i }-${ ii } ${ type } vs ${ t } (same - skip)`)
        it (`${ i }-${ ii } ${ type } vs ${ t }`, () => {
          expect(getType(value)).to.not.equal(t)
        })
      })
    })
  })

})
