module.exports = (array, { preserveConsecutiveUppercase = false } = {}) => {
  return array
    .filter((str) => typeof str == "string" && str.length > 0)
    .join("_")
    .toPascalCase({ preserveConsecutiveUppercase });
};
