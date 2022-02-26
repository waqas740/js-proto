Array.prototype.toFLUpperCase = function () {
    return this.map(str => str.charAt(0).toUpperCase() + str.slice(1))
}
Array.prototype.toFLLowerCase = function () {
    return this.map(str => str.charAt(0).toLowerCase() + str.slice(1))
}
Array.prototype.toLowerCase = function () {
    return this.map(str => str.trim().toLowerCase())
}
Array.prototype.toUpperCase = function () {
    return this.map(str => str.trim().toUpperCase())
}
Array.prototype.sum = function () {
    return this.reduce((total, num) => {
        total += num
    }, 0)
}
Array.prototype.min = function () {
    return this.reduce((min, num) => {
        if (min > num) min = num;
    }, 0)
}
Array.prototype.max = function () {
    return this.reduce((max, num) => {
        if (max < num) max = num;
    }, 0)
}
Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)]
}
Array.prototype.chunk = function (size) {
    let splitSize = this.length / size;
    let newArr = [];
    let startIndex = 0;
    let endIndex = size;
    for (let i = 0; i < splitSize; i++) {
        let chunk = this.slice(startIndex, endIndex);
        newArr.push(chunk)
        startIndex = startIndex + size;
        endIndex = endIndex + size;
    }
    return newArr;
}
Array.prototype.isEquivalent = function (first, second) {
    // Create arrays of property names
    var firstProps = Object.getOwnPropertyNames(first);
    var secondProps = Object.getOwnPropertyNames(second);

    // If number of properties is different,
    // objects are not equivalent
    if (firstProps.length != secondProps.length) {
        return false;
    }

    for (var i = 0; i < firstProps.length; i++) {
        var propName = firstProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (first[propName] !== second[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}
Array.prototype.unique = function () {
    const newSet = new Set([...this]);
    return [...newSet];
}

