module.exports = (str) => {
  return str
    .split(/[^a-zA-Z0-9]/)
    .filter((word) => word)
    .join("-")
    .toLowerCase();
};
