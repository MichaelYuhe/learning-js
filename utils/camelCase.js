const camelCase = (str) => {
  return str.replace(/-\w/g, (i) => i.slice(1).toUpperCase());
};
