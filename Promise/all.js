Promise.myAll = function (promises) {
  let arr = [];
  let count = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          arr[index] = res;
          count++;
          if (count === promises.length) resolve(arr);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};
