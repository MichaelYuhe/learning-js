Function.prototype.myApply = function (context, arr) {
  context = context || window;
  context.fn = this;
  const result = context.fn(...arr);
  delete context.fn;
  return result;
};
