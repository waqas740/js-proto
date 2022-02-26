
String.prototype.toFLUpperCase = function () {
    const str = this.toLowerCase()
    return str.charAt(0).toUpperCase() + str.slice(1)
}
String.prototype.toFLLowerCase = function () {
    return this.charAt(0).toLowerCase() + this.slice(1)
}
String.prototype.toFLProperCase = function () {
    return lowerCase(this).replace(/^\w|\s\w/g, upperCase);

}
/**
 * "Safer" String.toUpperCase()
 */
function upperCase(str) {
    return str.toUpperCase();
}
// camelcase
// pascalCase
// dotcase

