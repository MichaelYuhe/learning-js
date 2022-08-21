function myNew(Func, ...args) {
  const obj = {};
  obj.__proto__ = Func.prototype;
  const result = Func.apply(obj, args);
  return result instanceof Object ? result : obj;
}
