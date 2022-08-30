// 解构 + set
const unique0 = (arr) => {
  return [...new Set(arr)];
};

// Array.from + set
const unique1 = (arr) => {
  return Array.from(new Set(arr));
};

// 排序去重, 但是如果要求顺序不变，还原的时候得多做一层
const unique2 = (arr) => {
  arr.sort();
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    // 和前一个一样就不加进 res
  }
  return res;
};

// indexOf
const unique3 = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i]);
    }
  }
  return res;
};

// 双循环去重
