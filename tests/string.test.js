require("../index.js");

describe("String", function () {
  describe("#capitalize()", function () {
    it(
      "should return same string with first letter in uppercase",
      function () {
        expect("hello World".capitalize()).toStrictEqual("Hello World");
        expect("Hello World".capitalize()).toStrictEqual("Hello World");
      }.bind(this)
    );
  });
  describe("#toLowerCase()", function () {
    it(
      "should return same string with all letters in lowercase",
      function () {
        expect("Hello World".toLowerCase()).toStrictEqual("hello world");
        expect("hello World".toLowerCase()).toStrictEqual("hello world");
      }.bind(this)
    );
  });
  describe("#toUpperCase()", function () {
    it(
      "should return same string with all letters in uppercase",
      function () {
        expect("hello World".toUpperCase()).toStrictEqual("HELLO WORLD");
        expect("Hello World".toUpperCase()).toStrictEqual("HELLO WORLD");
      }.bind(this)
    );
  });
  describe("#toSwapCase()", function () {
    it(
      "should return string with capitalized letters and lowercase letters switched",
      function () {
        expect("hello World".toSwapCase()).toStrictEqual("HELLO wORLD");
        expect("Hello World".toSwapCase()).toStrictEqual("hELLO wORLD");
      }.bind(this)
    );
  });
  describe("#toCamelCase()", function () {
    it(
      "should return string with first letter in lowercase and rest in uppercase with spaces removed",
      function () {
        expect("hello World".toCamelCase()).toStrictEqual("helloWorld");
        expect("Hello World".toCamelCase()).toStrictEqual("helloWorld");
      }.bind(this)
    );
  });
  describe("#toSnakeCase()", function () {
    it(
      "should return string with all letters in lowercase and underscores between words",
      function () {
        expect("hello World".toSnakeCase()).toStrictEqual("hello_world");
        expect("Hello World".toSnakeCase()).toStrictEqual("hello_world");
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
        expect("hello World".toPascalCase()).toStrictEqual("HelloWorld");
        expect("Hello World".toPascalCase()).toStrictEqual("HelloWorld");
      }.bind(this)
    );
  });
  describe("#toDotCase()", function () {
    it(
      "should return string with all letters in lowercase and dots between words",
      function () {
        expect("hello World".toDotCase()).toStrictEqual("hello.World");
        expect("Hello World".toDotCase()).toStrictEqual("Hello.World");
      }.bind(this)
    );
  });
  describe("#toSnakeCase()", function () {
    it(
      "should return string with all letters in lowercase and underscores between words",
      function () {
        expect("hello World".toSnakeCase()).toStrictEqual("hello_world");
        expect("Hello World".toSnakeCase()).toStrictEqual("hello_world");
      }.bind(this)
    );
  });
  describe("#toSlugCase()", function () {
    it(
      "should return string with all letters in lowercase and hyphens between words",
      function () {
        expect("hello World".toSlugCase()).toStrictEqual("hello-world");
        expect("Hello World".toSlugCase()).toStrictEqual("hello-world");
      }.bind(this)
    );
  });
  describe("#truncate()", function () {
    it(
      "should return string with first n characters",
      function () {
        expect("hello World".truncate(5)).toStrictEqual("hello...");
        expect("Hello World".truncate(15)).toStrictEqual("Hello World");
      }.bind(this)
    );
  });
  describe("#mask()", function () {
    it(
      "should return string with first n characters replaced with mask",
      function () {
        expect("hello World".mask(5, "*")).toStrictEqual("hello******");
        expect("Hello World".mask(15, "*")).toStrictEqual("Hello World");
      }.bind(this)
    );
  });
  describe("#isJson()", function () {
    it("should return true if string is json", function () {
      expect("{}".isJson()).toStrictEqual(true);
      expect("hello".isJson()).toStrictEqual(false);
      expect("[1,2]".isJson()).toStrictEqual(true);
    });
  });
  describe("#camelToSnakeCase()", function () {
    it(
      "should return string with camelCase replaced with snake_case",
      function () {
        expect("helloWorld".camelToSnakeCase()).toStrictEqual("hello_world");
      }.bind(this)
    );
  });
  describe("#chars()", function () {
    it(
      "should return array of characters",
      function () {
        expect("hello World".chars()).toStrictEqual([
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
        expect("Hello World".chars()).toStrictEqual([
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
      expect("hello World".escape()).toStrictEqual("hello World");
    });
  });
  describe("#unescape()", function () {
    it(
      "should return string with special characters unescaped",
      function () {
        expect("hello World".unescape()).toStrictEqual("hello World");
      }.bind(this)
    );
  });
  describe("#words()", function () {
    it(
      "should return array of words",
      function () {
        expect("hello World".words()).toStrictEqual(["hello", "World"]);
        expect("Hello World".words()).toStrictEqual(["Hello", "World"]);
      }.bind(this)
    );
  });
  describe("#hashCode()", function () {
    it(
      "should return hash code of string",
      function () {
        expect("hello World".hashCode()).toStrictEqual(
          "hello World".hashCode()
        );
        expect("Hello World".hashCode()).toStrictEqual(
          "Hello World".hashCode()
        );
      }.bind(this)
    );
  });
  describe("#toTitleCase()", function () {
    it(
      "should return string with all letters in uppercase and spaces between words",
      function () {
        expect("hello World".toTitleCase()).toStrictEqual("Hello World");
        expect("Hello World".toTitleCase()).toStrictEqual("Hello World");
      }.bind(this)
    );
  });
});
