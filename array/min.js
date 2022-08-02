module.exports = (array) => {
  return array.reduce((min, num) => {
    if (typeof num === "number" && min > num) min = num;
    return min;
  }, array[0]);
};
