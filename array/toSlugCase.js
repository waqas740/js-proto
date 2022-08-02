module.exports = (array) => {
  return array
    .filter((str) => typeof str == "string" && str.length > 0)
    .join("-");
};
