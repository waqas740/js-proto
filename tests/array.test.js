require("../index.js");

describe("Array", function () {
  describe("#capitalize()", function () {
    it(
      "should return same array with first letter of  strings in uppercase",
      function () {
        expect(
          [1, 2, 3, "4", "a", "hello", "WORD", "lETTER"]._capitalize()
        ).toStrictEqual([1, 2, 3, "4", "A", "Hello", "WORD", "LETTER"]);
      }.bind(this)
    );
  });

  describe("#toLowerCase()", function () {
    it(
      "should return same array with all  strings in lowercase",
      function () {
        expect(
          [
            1,
            2,
            3,
            "4",
            [1, "3"],
            { a: 1 },
            "A",
            "hello",
            "WORD",
            "LeTtER",
          ]._toLowerCase()
        ).toStrictEqual([
          1,
          2,
          3,
          "4",
          [1, "3"],
          { a: 1 },
          "a",
          "hello",
          "word",
          "letter",
        ]);
      }.bind(this)
    );
  });

  describe("#toUpperCase()", function () {
    it(
      "should return same array with all  strings in uppercase",
      function () {
        expect(
          [
            1,
            2,
            3,
            "4",
            [1, "3"],
            { a: 1 },
            "a",
            "Hello",
            "WORD",
            "LeTTer",
          ]._toUpperCase()
        ).toStrictEqual([
          1,
          2,
          3,
          "4",
          [1, "3"],
          { a: 1 },
          "A",
          "HELLO",
          "WORD",
          "LETTER",
        ]);
      }.bind(this)
    );
  });

  describe("#sum()", function () {
    it(
      "should return sum of all numbers in array level 1 or 0 if array is empty",
      function () {
        expect(
          [
            1,
            2,
            3,
            "4",
            [1, "3"],
            { a: 1 },
            null,
            undefined,
            "a",
            "Hello",
            "WORD",
            "LeTTer",
          ]._sum()
        ).toBe(6);
      }.bind(this)
    );
  });
  describe("#min()", function () {
    it(
      "should return min of all numbers in array level 1 or 0 if array is empty",
      function () {
        expect(
          [
            1,
            2,
            3,
            "4",
            [1, "3"],
            [-1],
            { a: 1 },
            null,
            undefined,
            "a",
            "Hello",
            "WORD",
            "LeTTer",
          ]._min()
        ).toBe(1);
      }.bind(this)
    );
  });
  describe("#max()", function () {
    it(
      "should return max of all numbers in array level 1 or 0 if array is empty",
      function () {
        expect(
          [
            1,
            2,
            3,
            "4",
            [1, "3"],
            { a: 1 },
            null,
            undefined,
            [8],
            "a",
            "Hello",
            "WORD",
            "LeTTer",
          ]._max()
        ).toBe(3);
      }.bind(this)
    );
  });
  describe("#chunk()", function () {
    it(
      "should return chunked array",
      function () {
        expect(
          [
            1,
            2,
            3,
            "4",
            [1, "3"],
            { a: 1 },
            null,
            undefined,
            [8],
            "a",
            "Hello",
            "WORD",
            "LeTTer",
          ]._chunk(5)
        ).toStrictEqual([
          [1, 2, 3, "4", [1, "3"]],
          [{ a: 1 }, null, undefined, [8], "a"],
          ["Hello", "WORD", "LeTTer"],
        ]);
      }.bind(this)
    );
  });
  // describe("#isEquivalent()", function () {
  //   it(
  //     "should return true if arrays are equivalent",
  //     function () {
  //       expect(
  //         [
  //           1,
  //           2,
  //           3,
  //           "4",
  //           [1, "3"],
  //           { a: 1 },
  //           null,
  //           undefined,
  //           [8],
  //           "a",
  //           "Hello",
  //           "WORD",
  //           "LeTTer",
  //         ].isEquivalent([
  //           1,
  //           2,
  //           3,
  //           "4",
  //           [1, "3"],
  //           { a: 1 },
  //           null,
  //           undefined,
  //           [8],
  //           "a",
  //           "Hello",
  //           "WORD",
  //           "LeTTer",
  //         ])
  //       ).toBe(true);
  //     }.bind(this)
  //   );
  // });
  describe("#unique()", function () {
    it(
      "should return unique array",
      function () {
        expect(
          [
            1,
            2,
            3,
            "4",
            [1, "3"],
            2,
            "4",
            { a: 1 },
            { a: 1 },
            null,
            undefined,
            [8],
            "a",
            "A",
            "a",
            "LeTTer",
            [8],
            "LeTTer",
          ]._unique()
        ).toStrictEqual([
          1,
          2,
          3,
          "4",
          [1, "3"],
          { a: 1 },
          null,
          undefined,
          [8],
          "a",
          "A",
          "LeTTer",
        ]);
      }.bind(this)
    );
  });
});
