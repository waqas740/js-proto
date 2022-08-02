const capitalize = require("../string/capitalize");

module.exports = (array) => {
  return array.map((str) => (typeof str == "string" ? capitalize(str) : str));
};
