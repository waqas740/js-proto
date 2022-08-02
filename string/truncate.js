module.exports = (str, limit) => {
  const length = str.length;
  const truncated = str.substring(0, limit);
  return length > limit ? truncated + "..." : truncated;
};
