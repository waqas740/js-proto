module.exports = (array) => {
  return array.reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
};
