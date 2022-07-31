/**
 * Capitalize case is text written with the first letter of first word capitalized
 *  */
!String.prototype.capitalize &&
  (String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  });

/**
 * Proper case is text written with the first letter of each word capitalized
 *  */
!String.prototype.toTitleCase &&
  (String.prototype.toTitleCase = function () {
    return this.toLowerCase().replace(/^\w|\s\w/g, upperCase);
  });
/**
 * Swap case is text with all letters changed to uppercase or lowercase depending on current case of letter (upper or lower)
 */
!String.prototype.toSwapCase &&
  (String.prototype.toSwapCase = function () {
    return this.replace(/[a-z]/gi, function (char) {
      return char == char.toUpperCase()
        ? char.toLowerCase()
        : char.toUpperCase();
    });
  });
/**
 * Camel case is text with all words capitalized and separated by a single space character
 * (e.g. "Hello World") to "helloWorld"
 */
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
    return camelCaseWord.charAt(0).toLowerCase() + camelCaseWord.slice(1);
  });
/**
 * Pascal case is text written with the first letter of each word capitalized and all other letters lowercase
 */
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
/**
 * Dot case is text with all letters changed to lowercase and all words separated by a dot character (.)
 */
!String.prototype.toDotCase &&
  (String.prototype.toDotCase = function () {
    return this.split(/[^a-zA-Z]/)
      .filter((word) => word)
      .join(".");
  });
/**
 * Snake case is text with all letters changed to lowercase and all words separated by a single underscore character (_)
 */
!String.prototype.toSnakeCase &&
  (String.prototype.toSnakeCase = function () {
    return this.split(/[^a-zA-Z]/)
      .filter((word) => word)
      .join("_")
      .toLowerCase();
  });
/**
 * Slug case is text with all letters changed to lowercase and all words separated by a dash character (-)
 */
!String.prototype.toSlugCase &&
  (String.prototype.toSlugCase = function () {
    return this.split(/[^a-zA-Z0-9]/)
      .filter((word) => word)
      .join("-")
      .toLowerCase();
  });
/**
 * The truncate method truncates the given string to the specified length:
 *  if the string is shorter than the length, it is returned unchanged.
 *  If it is longer, it is truncated and ellipsis (…) is added.
 * If the length is 0, the string is returned empty.
 */
!String.prototype.truncate &&
  (String.prototype.truncate = function (limit) {
    const length = this.length;
    const truncated = this.substring(0, limit);
    return length > limit ? truncated + "..." : truncated;
  });

/**
 * The mask method masks a portion of a string with a repeated character, and may be used to obfuscate segments of strings such as email addresses and phone numbers: 

 */
!String.prototype.mask &&
  (String.prototype.mask = function (limit, mask) {
    const length = this.length;
    const subString = this.substring(0, limit);
    return length > limit
      ? subString + new Array(length - limit).fill(mask ? mask : "*").join("")
      : subString;
  });
/**
 * IsJson method checks if the string is a valid JSON string or not and returns true or false
 */
!String.prototype.isJson &&
  (String.prototype.isJson = function () {
    try {
      JSON.parse(this);
      return true;
    } catch (e) {
      return false;
    }
  });
/**
 * camelToSnakeCase converts a camelCase string to snake_case string and returns it as a string
 */
!String.prototype.camelToSnakeCase &&
  (String.prototype.camelToSnakeCase = function () {
    return this.replace(/([A-Z])/g, "_$1").toLowerCase();
  });
/**
 * Chars methods are used to convert string to array of characters
 */

!String.prototype.chars &&
  (String.prototype.chars = function () {
    return Array.from(this);
  });
/**
 * Escape string for use in HTML attributes.
 */
!String.prototype.escape &&
  (String.prototype.escape = function () {
    return this.replace(/[&<>"'`=\/]/g, function (s) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;",
      }[s];
    });
  });
/**
 * Unescape string for use in HTML attributes.
 */
!String.prototype.unescape &&
  (String.prototype.unescape = function () {
    return this.replace(
      /&amp;|&lt;|&gt;|&quot;|&#x27;|&#x2F;|&#x60;|&#x3D;/g,
      function (s) {
        return {
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#x27;": "'",
          "&#x2F;": "/",
          "&#x60;": "`",
          "&#x3D;": "=",
        }[s];
      }
    );
  });
/**
 * Words method is used to convert string to array of words
 */
!String.prototype.words &&
  (String.prototype.words = function () {
    return this.split(/\s+/);
  });

!String.prototype.hashCode &&
  (String.prototype.hashCode = function () {
    return this.split("").reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
  });

/**
 * "Safer" String.toUpperCase()
 */
function upperCase(str) {
  return str.toUpperCase();
}
