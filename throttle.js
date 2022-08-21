// throttle 节流
// 每隔一段时间才触发一次
function throttle(func, interval) {
  // 是否该节流
  let toThrottle = false;
  return function (...args) {
    // 如果不需要节流了
    if (!toThrottle) {
      // 触发完就需要设置为需要节流
      toThrottle = true;
      // 执行回调
      func.apply(this, args);
      // delay 后再取消节流
      setTimeout(() => {
        toThrottle = false;
      }, interval);
    }
  };
}
