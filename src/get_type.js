function getType (ent) {
  var type = typeof ent
  if (Array.isArray(ent)) return "array"
  if (ent === null) return "null"
  if (ent instanceof RegExp) return "object"
  return type
}

module.exports = getType
