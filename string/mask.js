module.exports = (str, limit, mask) => {
  const length = str.length;
  const subString = str.substring(0, limit);
  return length > limit
    ? subString + new Array(length - limit).fill(mask ? mask : "*").join("")
    : subString;
};
