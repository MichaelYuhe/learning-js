function myInstanceof(left, right) {
  let proto = left.__proto__;
  while (1) {
    if (proto === null) return false;
    if (proto === right.prototype) return true;
    proto = proto.__proto__;
  }
}
