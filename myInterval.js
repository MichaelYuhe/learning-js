function mySetInterval() {
  mySetInterval.timer = setTimeout(() => {
    arguments[0]();
    mySetInterval(...arguments);
  }, arguments[1]);
}

mySetInterval.clear = function () {
  clearTimeout(mySetInterval.timer);
};

mySetInterval(() => {
  console.log("d");
}, 1000);

setTimeout(() => {
  // 5s 后清理
  mySetInterval.clear();
}, 5000);
