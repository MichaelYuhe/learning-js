/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  const len = nums1.length;
  let res = [];
  for (let i = 0; i < len; i++) {
    let flag = false;
    for (let j = 0; j < nums1.length; j++) {
      if (nums1[j] > nums2[i]) {
        res.push(nums1[j]);
        nums1.splice(j, 1);
        flag = true;
        break;
      }
    }
    if (!flag) {
      res.push(nums1[0]);
      nums1.splice(0, 1);
    }
  }
  return res;
};
