const treeToArr = (tree) => {
  let queue = [];
  const res = [];
  queue = queue.concat(tree);
  while (queue.length > 0) {
    const node = queue.shift();
    if (node.children) {
      queue = queue.concat(node.children);
      delete node.children;
    }
    res.push(node);
  }
  return res;
};
