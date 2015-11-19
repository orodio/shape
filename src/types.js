var getType = require("./get_type")

function createPrimitiveCheckType (primitive) {
  function validate (isRequired, value) {
    var match = getType(value) === primitive
    return isRequired
      ? match && value != null
      : match || value == null
  }

  var checkType = validate.bind(null, false)
  checkType.isRequired = validate.bind(null, true)

  return checkType
}

module.exports = {
  string: createPrimitiveCheckType("string"),
  number: createPrimitiveCheckType("number"),
  bool: createPrimitiveCheckType("boolean"),
}
