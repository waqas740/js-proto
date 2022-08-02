module.exports = (str) => {
  return str.replace(/[a-z]/gi, function (char) {
    return char == char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
  });
};
