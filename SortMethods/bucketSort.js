const bucketSort = (arr) => {
  const len = arr.length;
  const max = Math.max(...arr),
    min = Math.min(...arr);
  // 第一步 确定分成几个桶
  // 公式：num = (max - min) / len + 1
  const bucketNum = Math.floor((max - min) / len) + 1;

  const bucketArr = new Array(bucketNum);
  for (let i = 0; i < bucketNum; i++) {
    bucketArr[i] = new Array();
  }

  // 第二步 确定元素在哪个桶
  // 公式：position = (value - min) / len
  arr.forEach((num) => {
    const index = Math.floor((num - min) / len);
    bucketArr[index].push(num);
  });

  // 第三步 对所有桶分别排好序
  bucketArr.forEach((bucket) => bucket.sort());

  // 第四步 整合所有桶
  let index = 0;
  for (let i = 0; i < bucketNum; i++) {
    for (let j = 0; j < bucketArr[i].length; j++) {
      arr[index++] = bucketArr[i][j];
    }
  }

  return arr;
};

const arr = [1, 3, 8, 9, 2, 40, 25, 4];

console.log(bucketSort(arr));
