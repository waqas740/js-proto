const toTitleCase = require("../string/toTitleCase");
module.exports = (array) => {
  return array.map((str) => (typeof str == "string" ? toTitleCase(str) : str));
};
