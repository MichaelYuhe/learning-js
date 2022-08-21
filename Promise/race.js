Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((item) => {
      Promise.resolve(item)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};
