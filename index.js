let addArrayProto = true;
let addObjectProto = true;
let addStringProto = true;
/**
 *
 * @param {Object} options
 * @param {Boolean} options.Array
 *  @param {Boolean} options.Object
 * @param {Boolean} options.String
 *
 */
module.exports.init = (options) => {
  if (options) {
    if (typeof options !== "object" || Array.isArray(options)) {
      throw new Error(
        "options should be object and have at least one key like Array or Object or String with boolean value"
      );
    }

    (!options.hasOwnProperty("Array") || options.Array == false) &&
      (addArrayProto = false);
    (!options.hasOwnProperty("Object") || options.Object == false) &&
      (addObjectProto = false);
    (!options.hasOwnProperty("String") || options.String == false) &&
      (addStringProto = false);
  }
  addArrayProto && require("./array");
  addObjectProto && require("./object");
  addStringProto && require("./string");
};
