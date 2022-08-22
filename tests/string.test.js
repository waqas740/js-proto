require("../index.js");

describe("String", function () {
  describe("#capitalize()", function () {
    it(
      "should return same string with first letter in uppercase",
      function () {
        expect("hello World"._capitalize()).toStrictEqual("Hello World");
        expect("Hello World"._capitalize()).toStrictEqual("Hello World");
      }.bind(this)
    );
  });
  describe("#toSwapCase()", function () {
    it(
      "should return string with capitalized letters and lowercase letters switched",
      function () {
        expect("hello World"._toSwapCase()).toStrictEqual("HELLO wORLD");
        expect("Hello World"._toSwapCase()).toStrictEqual("hELLO wORLD");
      }.bind(this)
    );
  });
  describe("#toCamelCase()", function () {
    it(
      "should return string with first letter in lowercase and rest in uppercase with spaces removed",
      function () {
        expect("hello World"._toCamelCase()).toStrictEqual("helloWorld");
        expect("Hello World"._toCamelCase()).toStrictEqual("helloWorld");
      }.bind(this)
    );
  });
  describe("#toSnakeCase()", function () {
    it(
      "should return string with all letters in lowercase and underscores between words",
      function () {
        expect("hello World"._toSnakeCase()).toStrictEqual("hello_world");
        expect("Hello World"._toSnakeCase()).toStrictEqual("hello_world");
      }.bind(this)
    );
  });

  // describe("#toTitleCase()", function () {
  //   it(
  //     "should return string with all letters in uppercase and spaces between words",
  //     function () {
  //       expect("hello World".toTitleCase()).toStrictEqual("Hello World");
  //       expect("Hello World".toTitleCase()).toStrictEqual("Hello World");
  //     }.bind(this)
  //   );
  // });
  describe("#toPascalCase()", function () {
    it(
      "should return string with first letter in uppercase of each word and rest in lowercase with spaces removed",
      function () {
        expect("hello World"._toPascalCase()).toStrictEqual("HelloWorld");
        expect("Hello World"._toPascalCase()).toStrictEqual("HelloWorld");
      }.bind(this)
    );
  });
  describe("#toDotCase()", function () {
    it(
      "should return string with all letters in lowercase and dots between words",
      function () {
        expect("hello World"._toDotCase()).toStrictEqual("hello.World");
        expect("Hello World"._toDotCase()).toStrictEqual("Hello.World");
      }.bind(this)
    );
  });
  describe("#toSnakeCase()", function () {
    it(
      "should return string with all letters in lowercase and underscores between words",
      function () {
        expect("hello World"._toSnakeCase()).toStrictEqual("hello_world");
        expect("Hello World"._toSnakeCase()).toStrictEqual("hello_world");
      }.bind(this)
    );
  });
  describe("#toSlugCase()", function () {
    it(
      "should return string with all letters in lowercase and hyphens between words",
      function () {
        expect("hello World"._toSlugCase()).toStrictEqual("hello-world");
        expect("Hello World"._toSlugCase()).toStrictEqual("hello-world");
      }.bind(this)
    );
  });
  describe("#truncate()", function () {
    it(
      "should return string with first n characters",
      function () {
        expect("hello World"._truncate(5)).toStrictEqual("hello...");
        expect("Hello World"._truncate(15)).toStrictEqual("Hello World");
      }.bind(this)
    );
  });
  describe("#mask()", function () {
    it(
      "should return string with first n characters replaced with mask",
      function () {
        expect("hello World"._mask(5, "*")).toStrictEqual("hello******");
        expect("Hello World"._mask(15, "*")).toStrictEqual("Hello World");
      }.bind(this)
    );
  });
  describe("#isJson()", function () {
    it("should return true if string is json", function () {
      expect("{}"._isJson()).toStrictEqual(true);
      expect("hello"._isJson()).toStrictEqual(false);
      expect("[1,2]"._isJson()).toStrictEqual(true);
    });
  });
  describe("#camelToSnakeCase()", function () {
    it(
      "should return string with camelCase replaced with snake_case",
      function () {
        expect("helloWorld"._camelToSnakeCase()).toStrictEqual("hello_world");
      }.bind(this)
    );
  });
  describe("#chars()", function () {
    it(
      "should return array of characters",
      function () {
        expect("hello World"._chars()).toStrictEqual([
          "h",
          "e",
          "l",
          "l",
          "o",
          " ",
          "W",
          "o",
          "r",
          "l",
          "d",
        ]);
        expect("Hello World"._chars()).toStrictEqual([
          "H",
          "e",
          "l",
          "l",
          "o",
          " ",
          "W",
          "o",
          "r",
          "l",
          "d",
        ]);
      }.bind(this)
    );
  });
  describe("#escape()", function () {
    it("should return string with special characters escaped", function () {
      expect("hello World"._escape()).toStrictEqual("hello World");
    });
  });
  describe("#unescape()", function () {
    it(
      "should return string with special characters unescaped",
      function () {
        expect("hello World"._unescape()).toStrictEqual("hello World");
      }.bind(this)
    );
  });
  describe("#words()", function () {
    it(
      "should return array of words",
      function () {
        expect("hello World"._words()).toStrictEqual(["hello", "World"]);
        expect("Hello World"._words()).toStrictEqual(["Hello", "World"]);
      }.bind(this)
    );
  });
  describe("#hashCode()", function () {
    it(
      "should return hash code of string",
      function () {
        expect("hello World"._hashCode()).toStrictEqual(
          "hello World"._hashCode()
        );
        expect("Hello World"._hashCode()).toStrictEqual(
          "Hello World"._hashCode()
        );
      }.bind(this)
    );
  });
  describe("#toTitleCase()", function () {
    it(
      "should return string with all letters in uppercase and spaces between words",
      function () {
        expect("hello World"._toTitleCase()).toStrictEqual("Hello World");
        expect("Hello World"._toTitleCase()).toStrictEqual("Hello World");
      }.bind(this)
    );
  });
});

const a = ["h", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"];
