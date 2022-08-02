module.exports = module.exports = (
  str,
  { preserveConsecutiveUppercase = false } = {}
) => {
  return str
    .split(/[^a-zA-Z]/)
    .filter((word) => word)
    .map((word) => {
      word = preserveConsecutiveUppercase
        ? word.trim()
        : word.toLowerCase().trim();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
};
