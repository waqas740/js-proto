module.exports = (array) => {
  var arr = array.map((item) => JSON.stringify(item));
  return array.filter(
    (item, index) => arr.indexOf(JSON.stringify(item)) === index
  );
};
