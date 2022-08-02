const hashCode = require("../string/hashCode");
module.exports = (array) => {
  return array.reduce((hash, item) => {
    if (item) {
      hash += hashCode(item.toString());
    }
    return hash;
  }, 0);
};
