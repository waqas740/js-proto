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
Object.prototype._flip = function () {
  return flip(this);
};

Object.prototype._sort = function () {
  return sort(this);
};

Object.prototype._pick = function (keys) {
  return pick(this, keys);
};
Object.prototype._omit = function (keys) {
  return omit(this, keys);
};

Object.prototype._clone = function () {
  return clone(this);
};

Object.prototype._merge = function () {
  return merge(this, arguments);
};

Object.prototype._size = function () {
  return size(this);
};

Object.prototype._keys = function () {
  return keys(this);
};

Object.prototype._values = function () {
  return values(this);
};

Object.prototype._capitalizeKeys = function () {
  return capitalizeKeys(this);
};

Object.prototype._toLowerCaseKeys = function () {
  return toLowerCaseKeys(this);
};

Object.prototype._toUpperCaseKeys = function () {
  return toUpperCaseKeys(this);
};
