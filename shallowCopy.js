function shallowCopy(obj) {
  if (typeof obj !== "object") return;
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) newObj[key] = obj[key];
  }
  return newObj;
}
