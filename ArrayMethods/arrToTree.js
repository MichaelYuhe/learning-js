const arrToTree = (arr) => {
  const map = new Map();
  const res = [];

  arr.forEach((node) => {
    map.set(node.id, node);
  });

  map.forEach((node) => {
    if (node.parentId === 0) {
      res.push(node);
    } else {
      const parent = map.get(node.parentId);
      if (parent) {
        parent.children = parent.children || [];
        parent.children.push(node);
      }
    }
  });

  return res;
};
