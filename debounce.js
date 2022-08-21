// debounce
// 防抖，n 秒内再次触发则重新计时
function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    // 重新计时
    clearTimeout(timer);
    // 重新设置一个 delay 后触发的回调
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
