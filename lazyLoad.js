// 获取所有图片
const imageList = [...document.querySelectALl("img")];
const len = imageList.length;

const lazyLoad = (function () {
  let count = 0;

  return function () {
    const deleteIndexList = [];
    imageList.forEach((img, index) => {
      // 得到图片矩形框，即位置大小
      const rect = img.getBoundingClientRect();
      // 若在可视范围内，设置 src 进行加载图片
      if (rect.top < window.innerHeight) {
        img.src = img.dataset.src;
        deleteIndexList.push(index);
        count++;
        // 全部加载完毕，移除监听事件
        if (count === len) document.removeEventListener("scroll", lazyLoad);
      }
    });
    imageList = imageList.filter(
      (img, index) => !deleteIndexList.includes(index)
    );
  };
})();

document.addEventListener("scroll", lazyLoad);
