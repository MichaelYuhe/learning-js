const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  // 基准点位置
  const pivotIndex = Math.floor(arr.length / 2);
  // 取出基准点
  const pivot = arr.splice(pivotIndex, 1)[0];

  const left = [],
    right = [];
  for (const i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // 递归左 + 基准点 + 递归右
  return quickSort(left).concat([pivot], quickSort(right));
};
