/**
 * Capitalize case is text written with the first letter of first word capitalized
 *  */

const {
  capitalize,
  toTitleCase,
  toSwapCase,
  toCamelCase,
  toPascalCase,
  toDotCase,
  toSnakeCase,
  toSlugCase,
  truncate,
  isJson,
  camelToSnakeCase,
  chars,
  escape,
  unescape,
  hashCode,
  words,
  mask,
} = require("./string/index");

/**
 *
 *
 * _capitalize method capitalizes the first letter of the string
 */
String.prototype._capitalize = function () {
  return capitalize(this);
};

/**
 * Proper case is text written with the first letter of each word capitalized
 *  */

String.prototype._toTitleCase = function () {
  return toTitleCase(this);
};
/**
 * Swap case is text with all letters changed to uppercase or lowercase depending on current case of letter (upper or lower)
 */

String.prototype._toSwapCase = function () {
  return toSwapCase(this);
};
/**
 * Camel case is text with all words capitalized and separated by a single space character
 * (e.g. "Hello World") to "helloWorld"
 * camelCase method converts the string to camel case format,
 */

String.prototype._toCamelCase = function ({
  preserveConsecutiveUppercase = false,
} = {}) {
  return toCamelCase(this, { preserveConsecutiveUppercase });
};
/**
 * Pascal case is text written with the first letter of each word capitalized and all other letters lowercase
 */

String.prototype._toPascalCase = function ({
  preserveConsecutiveUppercase = false,
} = {}) {
  return toPascalCase(this, { preserveConsecutiveUppercase });
};
/**
 * Dot case is text with all letters changed to lowercase and all words separated by a dot character (.)
 */

String.prototype._toDotCase = function () {
  return toDotCase(this);
};
/**
 * Snake case is text with all letters changed to lowercase and all words separated by a single underscore character (_)
 */

String.prototype._toSnakeCase = function () {
  return toSnakeCase(this);
};
/**
 * Slug case is text with all letters changed to lowercase and all words separated by a dash character (-)
 */

String.prototype._toSlugCase = function () {
  return toSlugCase(this);
};
/**
 * The truncate method truncates the given string to the specified length:
 *  if the string is shorter than the length, it is returned unchanged.
 *  If it is longer, it is truncated and ellipsis (…) is added.
 * If the length is 0, the string is returned empty.
 */

String.prototype._truncate = function (limit) {
  return truncate(this, limit);
};

/**
 * The mask method masks a portion of a string with a repeated character, and may be used to obfuscate segments of strings such as email addresses and phone numbers: 

 */

String.prototype._mask = function (limit, maskKey) {
  return mask(this, limit, maskKey);
};
/**
 * IsJson method checks if the string is a valid JSON string or not and returns true or false
 */
String.prototype._isJson = function () {
  return isJson(this);
};
/**
 * camelToSnakeCase converts a camelCase string to snake_case string and returns it as a string
 */

String.prototype._camelToSnakeCase = function () {
  return camelToSnakeCase(this);
};
/**
 * Chars methods are used to convert string to array of characters
 */

String.prototype._chars = function () {
  return chars(this);
};
/**
 * Escape string for use in HTML attributes.
 */

String.prototype._escape = function () {
  return escape(this);
};
/**
 * Unescape string for use in HTML attributes.
 */

String.prototype._unescape = function () {
  return unescape(this);
};
/**
 * Words method is used to convert string to array of words
 */

String.prototype._words = function () {
  return words(this);
};

String.prototype._hashCode = function () {
  return hashCode(this);
};
