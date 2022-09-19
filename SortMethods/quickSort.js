const quickSort = (arr) => {
  const len = arr.length;
  if (len <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(len / 2);
  const pivot = arr.splice(pivotIndex, 1)[0];

  const left = [],
    right = [];
  arr.forEach((num) => {
    if (num < pivot) left.push(pivot);
    else right.push(pivot);
  });

  return quickSort(left).concat([pivot], quickSort(right));
};
