const capitalize = require("../string/capitalize");
module.exports = (object) => {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => [capitalize(key), value])
  );
};
