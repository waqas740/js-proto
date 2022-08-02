module.exports = (array) => {
  return array.reduce((total, num) => {
    if (typeof num === "number") {
      total += num;
    }
    return total;
  }, 0);
};
