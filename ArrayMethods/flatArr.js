function flat1(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

function flat2(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) res = res.concat(flat2(arr[i]));
    else res.push(arr[i]);
  }
  return res;
}
