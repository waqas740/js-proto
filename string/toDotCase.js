module.exports = (str) => {
  return str
    .split(/[^a-zA-Z]/)
    .filter((word) => word)
    .join(".");
};
