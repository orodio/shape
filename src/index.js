function shape (spec) {
  return function (ent) {
    return spec(ent)
  }
}

// shape.Types = {
//   string: createPrimitiveTypeChecker("string"),
//   number: createPrimitiveTypeChecker("number"),
//   bool: createPrimitiveTypeChecker("boolean"),
//   array: createPrimitiveTypeChecker("array"),
//   object: createPrimitiveTypeChecker("object")
// }

// function createPrimitiveTypeChecker (expectedType) {
//   function validate (isRequired) {
//     return function (ent) {
//       var isMatch = expectedType === getType(ent)
//       return expectedType === getType(ent)
//     }
//   }

//   var typeChecker = validate(false)
//   typeChecker.isRequired = validate(true)

//   return typeChecker
// }

// function getType (ent) {
//   var type = typeof ent
//   if (Array.isArray(ent)) return "array"
//   if (ent === null) return "null"
//   if (ent instanceof RegExp) return "object"
//   return type
// }

// shape.getType = getType

module.exports = shape
