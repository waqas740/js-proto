module.exports = (str, { preserveConsecutiveUppercase = false } = {}) => {
  var camelCaseWord = str
    .split(/[^a-zA-Z]/)
    .filter((word) => word)
    .map((word) => {
      word = preserveConsecutiveUppercase
        ? word.trim()
        : word.toLowerCase().trim();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
  return camelCaseWord.charAt(0).toLowerCase() + camelCaseWord.slice(1);
};
