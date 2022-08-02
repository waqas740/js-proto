module.exports = (str) => {
  return str.toLowerCase().replace(/^\w|\s\w/g, (word) => word.toUpperCase());
};
