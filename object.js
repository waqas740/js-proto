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
Object.defineProperty(Object.prototype, "_flip", {
  value: function () {
    return flip(this);
  },
});

/**
 *
 * Sort an object by keys
 */
Object.defineProperty(Object.prototype, "_sort", {
  value: function () {
    return sort(this);
  },
});

/**
 * pick specific keys from an object
 */
Object.defineProperty(Object.prototype, "_pick", {
  value: function (keys) {
    return pick(this, keys);
  },
});
/**
 * omit specific keys from an object
 */
Object.defineProperty(Object.prototype, "_omit", {
  value: function (keys) {
    return omit(this, keys);
  },
});
/**
 *
 */
Object.defineProperty(Object.prototype, "_clone", {
  value: function () {
    return clone(this);
  },
});

Object.defineProperty(Object.prototype, "_merge", {
  value: function () {
    return merge(this, arguments);
  },
});

/**
 *
 * Get the size of an object like number of keys
 */
Object.defineProperty(Object.prototype, "_size", {
  value: function () {
    return size(this);
  },
});

/**
 *
 * get all keys from an object
 */
Object.defineProperty(Object.prototype, "_keys", {
  value: function () {
    return keys(this, keys);
  },
});

/**
 *
 * Get all values from an object
 */
Object.defineProperty(Object.prototype, "_values", {
  value: function () {
    return values(this);
  },
});

/**
 *
 * convert all keys to title case
 */
Object.defineProperty(Object.prototype, "_capitalizeKeys", {
  value: function () {
    return capitalizeKeys(this);
  },
});

/**
 * Convert all keys to lower case
 */
Object.defineProperty(Object.prototype, "_toLowerCaseKeys", {
  value: function () {
    return toLowerCaseKeys(this);
  },
});

/**
 *
 * Convert all keys to upper case
 */
Object.defineProperty(Object.prototype, "_toUpperCaseKeys", {
  value: function () {
    return toUpperCaseKeys(this);
  },
});
