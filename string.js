!String.prototype.toFLUpperCase &&
  (String.prototype.toFLUpperCase = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  });
!String.prototype.toFLLowerCase &&
  (String.prototype.toFLLowerCase = function () {
    return this.charAt(0).toLowerCase() + this.slice(1);
  });
!String.prototype.toFLProperCase &&
  (String.prototype.toFLProperCase = function () {
    return lowerCase(this).replace(/^\w|\s\w/g, upperCase);
  });

!String.prototype.toCamelCase &&
  (String.prototype.toCamelCase = function ({
    preserveConsecutiveUppercase = false,
  } = {}) {
    var camelCaseWord = this.split(/[^a-zA-Z]/)
      .filter((word) => word)
      .map((word) => {
        word = preserveConsecutiveUppercase
          ? word.trim()
          : word.toLowerCase().trim();
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join("");
    camelCaseWord.charAt(0).toLowerCase() + this.slice(1);
    return camelCaseWord;
  });
!String.prototype.toPascalCase &&
  (String.prototype.toPascalCase = function ({
    preserveConsecutiveUppercase = false,
  } = {}) {
    return this.split(/[^a-zA-Z]/)
      .filter((word) => word)
      .map((word) => {
        word = preserveConsecutiveUppercase
          ? word.trim()
          : word.toLowerCase().trim();
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join("");
  });
!String.prototype.toDotCase &&
  (String.prototype.toDotCase = function () {
    return this.split(/[^a-zA-Z]/)
      .filter((word) => word)
      .join(".");
  });

!String.prototype.toSnakeCase &&
  (String.prototype.toSnakeCase = function () {
    return this.split(/[^a-zA-Z]/)
      .filter((word) => word)
      .join("_")
      .toLowerCase();
  });

/**
 * "Safer" String.toUpperCase()
 */
function upperCase(str) {
  return str.toUpperCase();
}
