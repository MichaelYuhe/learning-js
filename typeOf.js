function typeOf(target) {
  return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
}
