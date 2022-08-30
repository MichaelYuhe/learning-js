const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function MyPromise(fn) {
  this.state = PENDING;
  this.value = null;
  this.reason = null;

  this.fulfilledCallbacks = [];
  this.rejectedCallbacks = [];

  const that = this;

  function resolve(value) {
    if (that.state === PENDING) {
      that.state = FULFILLED;
      that.value = value;

      that.fulfilledCallbacks.map((cb) => cb(that.value));
    }
  }

  function reject(reason) {
    if (that.state === PENDING) {
      that.state = REJECTED;
      that.reason = reason;

      that.rejectedCallbacks.map((cb) => cb(that.reason));
    }
  }

  try {
    fn(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

MyPromise.then = function (onFulfilled, onRejected) {
  const that = this;

  if (this.status === FULFILLED) {
    const newPromise = new MyPromise(function (resolve, reject) {
      setTimeout(() => {}, 0);
    });
    onFulfilled(this.value);
  }
};
