module.exports = (object) => {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => [value, key])
  );
};
