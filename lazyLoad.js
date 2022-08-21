const imageList = [...document.querySelectALl("img")];
const len = imageList.length;

const lazyLoad = (function () {
  let count = 0;

  return function () {
    const deleteIndexList = [];
    imageList.forEach((img, index) => {
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        img.src = img.dataset.src;
        deleteIndexList.push(index);
        count++;
        if (count === len) document.removeEventListener("scroll", lazyLoad);
      }
    });
    imageList = imageList.filter(
      (img, index) => !deleteIndexList.includes(index)
    );
  };
})();

document.addEventListener("scroll", lazyLoad);
