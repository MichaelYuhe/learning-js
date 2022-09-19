// 随机打乱数组
const randomSort = (arr) => {
  arr.sort((a, b) => {
    return Math.random() > 0.5 ? -1 : 1;
  });
};
