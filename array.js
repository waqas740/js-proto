!Array.prototype.toFLUpperCase &&
  (Array.prototype.toFLUpperCase = function () {
    return this.map((str) =>
      typeof str == "string" ? str.toFLUpperCase() : str
    );
  });
!Array.prototype.toFLLowerCase &&
  (Array.prototype.toFLLowerCase = function () {
    return this.map((str) =>
      typeof str == "string" ? str.toFLLowerCase() : str
    );
  });
!Array.prototype.toLowerCase &&
  (Array.prototype.toLowerCase = function () {
    return this.map((str) =>
      typeof str == "string" ? str.toLowerCase() : str
    );
  });
!Array.prototype.toUpperCase &&
  (Array.prototype.toUpperCase = function () {
    return this.map((str) =>
      typeof str == "string" ? str.toUpperCase() : str
    );
  });
!Array.prototype.sum &&
  (Array.prototype.sum = function () {
    return this.reduce((total, num) => {
      if (typeof num === "number") {
        total += num;
      }
      return total;
    }, 0);
  });
!Array.prototype.min &&
  (Array.prototype.min = function () {
    return this.reduce((min, num) => {
      if (typeof num === "number" && min > num) min = num;
      return min;
    }, this[0]);
  });
!Array.prototype.max &&
  (Array.prototype.max = function () {
    return this.reduce((max, num) => {
      if (typeof num == "number" && max < num) max = num;
      return max;
    }, this[0]);
  });
!Array.prototype.random &&
  (Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
  });
!Array.prototype.chunk &&
  (Array.prototype.chunk = function (size) {
    var splitSize = this.length / size;
    var newArr = [];
    var startIndex = 0;
    var endIndex = size;
    for (var i = 0; i < splitSize; i++) {
      var chunk = this.slice(startIndex, endIndex);
      newArr.push(chunk);
      startIndex = startIndex + size;
      endIndex = endIndex + size;
    }
    return newArr;
  });
!Array.prototype.isEquivalent &&
  (Array.prototype.isEquivalent = function (second) {
    var firstProps = Object.getOwnPropertyNames(this);
    var secondProps = Object.getOwnPropertyNames(second);

    if (firstProps.length != secondProps.length) {
      return false;
    }

    for (var i = 0; i < firstProps.length; i++) {
      var propName = firstProps[i];
      if (this[propName] !== second[propName]) {
        return false;
      }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
  });
!Array.prototype.unique &&
  (Array.prototype.unique = function () {
    var arr = this.map((item) => JSON.stringify(item));
    return this.filter(
      (item, index) => arr.indexOf(JSON.stringify(item)) === index
    );
  });
!Array.prototype.camelCase &&
  (Array.prototype.camelCase = function ({
    preserveConsecutiveUppercase = false,
  } = {}) {
    return this.filter((str) => typeof str == "string" && str.length > 0)
      .join("_")
      .toCamelCase({ preserveConsecutiveUppercase });
  });
!Array.prototype.pascalCase &&
  (Array.prototype.pascalCase = function ({
    preserveConsecutiveUppercase = false,
  } = {}) {
    return this.filter((str) => typeof str == "string" && str.length > 0)
      .join("_")
      .toPascalCase({ preserveConsecutiveUppercase });
  });
!Array.prototype.snakeCase &&
  (Array.prototype.snakeCase = function () {
    return this.filter((str) => typeof str == "string" && str.length > 0).join(
      "_"
    );
  });
