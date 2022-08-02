module.exports = (array) => {
  return array.reduce((max, num) => {
    if (typeof num == "number" && max < num) max = num;
    return max;
  }, array[0]);
};
