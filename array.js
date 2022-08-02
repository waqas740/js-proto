const {
  capitalize,
  toTitleCase,
  toLowerCase,
  toUpperCase,
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toSlugCase,
  sum,
  min,
  max,
  random,
  chunk,
  isEquivalent,
  unique,
  head,
  last,
  fromPairs,
  hashCode,
  insert,
  deleteAt,
  at,
} = require("./array/index");

Array.prototype._capitalize = function () {
  return capitalize(this);
};

Array.prototype._toTitleCase = function () {
  return toTitleCase(this);
};

Array.prototype._toLowerCase = function () {
  return toLowerCase(this);
};

Array.prototype._toUpperCase = function () {
  return toUpperCase(this);
};

Array.prototype._toCamelCase = function ({
  preserveConsecutiveUppercase = false,
} = {}) {
  return toCamelCase(this, { preserveConsecutiveUppercase });
};

Array.prototype._toPascalCase = function ({
  preserveConsecutiveUppercase = false,
} = {}) {
  return toPascalCase(this, { preserveConsecutiveUppercase });
};

Array.prototype._toSnakeCase = function () {
  return toSnakeCase(this);
};

Array.prototype._toSlugCase = function () {
  return toSlugCase(this);
};

Array.prototype._sum = function () {
  return sum(this);
};

Array.prototype._min = function () {
  return min(this);
};

Array.prototype._max = function () {
  return max(this);
};

Array.prototype._random = function () {
  return random(this);
};

Array.prototype._chunk = function (size) {
  return chunk(this, size);
};

Array.prototype._isEquivalent = function (second) {
  return isEquivalent(this, second);
};

Array.prototype._unique = function () {
  return unique(this);
};

Array.prototype._head = function () {
  return head(this);
};

Array.prototype._last = function () {
  return last(this);
};

Array.prototype._fromPairs = function () {
  return fromPairs(this);
};

Array.prototype._hashCode = function () {
  return hashCode(this);
};

Array.prototype._insert = function (index, data) {
  return insert(index, data);
};

Array.prototype._deletedAt = function (index) {
  return deleteAt(this, index);
};

Array.prototype._at = function (index) {
  return at(this, index);
};
// var arr = ["OR", ["<", "a", "b"], ["AND", ["==", "c", "d"], ["!=", "e", "f"]]];
// ["OR", ["<", "a", "b"], ["AND", ["==", "c", "d"], ["!=", "e", "f"]]];

// to: "a < b OR (c == d AND e != f)";

// function createExpression(arr) {
//   return arr[1] + arr[0] + arr[2];
// }
