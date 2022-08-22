/** 
 * Flip method for objects. 
 
 */
const {
  flip,
  sort,
  pick,
  omit,
  clone,
  merge,
  size,
  keys,
  values,
  capitalizeKeys,
  toLowerCaseKeys,
  toUpperCaseKeys,
} = require("./object/index");

/**
 *
 * flip key and value of an object
 */
Object.prototype._flip = function () {
  return flip(this);
};
/**
 *
 * Sort an object by keys
 */
Object.prototype._sort = function () {
  return sort(this);
};
/**
 * pick specific keys from an object
 */

Object.prototype._pick = function (keys) {
  return pick(this, keys);
};
/**
 * omit specific keys from an object
 */
Object.prototype._omit = function (keys) {
  return omit(this, keys);
};
/**
 *
 */
Object.prototype._clone = function () {
  return clone(this);
};

Object.prototype._merge = function () {
  return merge(this, arguments);
};

/**
 *
 * Get the size of an object like number of keys
 */
Object.prototype._size = function () {
  return size(this);
};
/**
 *
 * get all keys from an object
 */
Object.prototype._keys = function () {
  return keys(this);
};
/**
 *
 * Get all values from an object
 */
Object.prototype._values = function () {
  return values(this);
};
/**
 *
 * convert all keys to title case
 */

Object.prototype._capitalizeKeys = function () {
  return capitalizeKeys(this);
};
/**
 * Convert all keys to lower case
 */
Object.prototype._toLowerCaseKeys = function () {
  return toLowerCaseKeys(this);
};
/**
 *
 * Convert all keys to upper case
 */
Object.prototype._toUpperCaseKeys = function () {
  return toUpperCaseKeys(this);
};
