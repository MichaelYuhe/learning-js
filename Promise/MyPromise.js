const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;

    executor(this.resolve, this.reject);
  }

  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;
    }
  };

  reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;
    }

    then(onResolved, onRejected) {
      if (this.status === FULFILLED) {
        onResolved(this.value);
      } else if (this.status === REJECTED) {
        onRejected(this.reason);
      }
    };
  };
}

const promise = new MyPromise((resolve, reject) => {
  resolve(100);
  reject("Err");
});

promise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
