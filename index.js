var recipes = {}

const updateObjectWithKeyAndValue = (object, key, value) => {
  return Object.assign(object, object[key] = value)
}