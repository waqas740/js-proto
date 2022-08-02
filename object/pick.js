module.exports = (object, keys) => {
  return Object.fromEntries(
    Object.entries(object).filter(([key, value]) => keys.includes(key))
  );
};
