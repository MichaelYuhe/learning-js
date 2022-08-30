const bucketSort = (arr) => {
  const len = arr.length;
  const max = Math.max(...arr),
    min = Math.min(...arr);
  const bucketNum = Math.floor((max - min) / len) + 1;

  const bucketArr = new Array(bucketNum);
  for (let i = 0; i < bucketNum; i++) {
    bucketArr[i] = new Array();
  }

  arr.forEach((num) => {
    const index = Math.floor((num - min) / len);
    bucketArr[index].push(num);
  });

  bucketArr.forEach((bucket) => bucket.sort());

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
