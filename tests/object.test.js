require("../index.js");

describe("Object", function () {
  describe("#flip()", function () {
    it(
      "should return object with keys and values swapped",
      function () {
        expect({ a: 1, b: 2 }._flip()).toEqual({ 1: "a", 2: "b" });
        expect({ a: 1, b: 2 }._flip()).toEqual({ 1: "a", 2: "b" });
      }.bind(this)
    );
  });
  describe("#sort()", function () {
    it(
      "should return object with keys sorted",
      function () {
        expect({ a: 1, b: 2 }._sort()).toStrictEqual({ a: 1, b: 2 });
        expect({ b: 2, a: 1 }._sort()).toStrictEqual({ a: 1, b: 2 });
      }.bind(this)
    );
  });
  describe("#pick()", function () {
    it(
      "should return object with keys picked",
      function () {
        expect({ a: 1, b: 2 }._pick(["a"])).toStrictEqual({ a: 1 });
        expect({ a: 1, b: 2, c: 3 }._pick(["b", "c"])).toStrictEqual({
          b: 2,
          c: 3,
        });
      }.bind(this)
    );
  });
  describe("#omit()", function () {
    it(
      "should return object with keys omitted",
      function () {
        expect({ a: 1, b: 2 }._omit(["a"])).toStrictEqual({ b: 2 });
        expect({ a: 1, b: 2, c: 3 }._omit(["b", "c"])).toStrictEqual({ a: 1 });
      }.bind(this)
    );
  });
  describe("#clone()", function () {
    it(
      "should return object with keys and values cloned",
      function () {
        expect({ a: 1, b: 2 }._clone()).toStrictEqual({ a: 1, b: 2 });
        expect({ a: 1, b: 2 }._clone()).toStrictEqual({ a: 1, b: 2 });
      }.bind(this)
    );
  });
  describe("#merge()", function () {
    it(
      "should return object with keys and values merged",
      function () {
        expect({ a: 1, b: 2 }._merge({ a: 3 })).toStrictEqual({
          a: 3,
          b: 2,
        });
        expect({ a: 1, b: 2 }._merge({ a: 3 })).toStrictEqual({
          a: 3,
          b: 2,
        });
      }.bind(this)
    );
  });
  describe("#size()", function () {
    it(
      "should return object size",
      function () {
        expect({ a: 1, b: 2 }._size()).toStrictEqual(2);
      }.bind(this)
    );
  });
  describe("#keys()", function () {
    it(
      "should return object keys",
      function () {
        expect({ a: 1, b: 2 }._keys()).toStrictEqual(["a", "b"]);
      }.bind(this)
    );
  });
  describe("#values()", function () {
    it(
      "should return object values",
      function () {
        expect({ a: 1, b: 2 }._values()).toStrictEqual([1, 2]);
      }.bind(this)
    );
  });
  describe("#capitalizeKeys()", function () {
    it(
      "should return object with keys capitalized",
      function () {
        expect({ a: 1, b: 2 }._capitalizeKeys()).toEqual({
          A: 1,
          B: 2,
        });
      }.bind(this)
    );
  });
  describe("#toLowerCaseKeys()", function () {
    it(
      "should return object with keys lower case",
      function () {
        expect({ A: 1, B: 2 }._toLowerCaseKeys()).toEqual({
          a: 1,
          b: 2,
        });
      }.bind(this)
    );
  });
  describe("#toUpperCaseKeys()", function () {
    it(
      "should return object with keys upper case",
      function () {
        expect({ a: 1, b: 2 }._toUpperCaseKeys()).toEqual({
          A: 1,
          B: 2,
        });
      }.bind(this)
    );
  });
});
