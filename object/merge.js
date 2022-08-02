module.exports = (object, args) => {
  var _this = Object.assign({}, object);
  Array.from(args).forEach(function (obj) {
    Object.assign(_this, obj);
  });
  return _this;
};
