var recipes = {}

var updateObjectWithKeyAndValue = (object, key, value) => {
  Object.assign(object, object[key] = value)
}