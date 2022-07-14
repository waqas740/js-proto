!Object.prototype.flip &&
  (Object.prototype.flip = function () {
    for (const [key, value] of Object.entries(this)) {
      this[value] = key;
      delete this[key];
    }
  });

!Object.prototype.sort &&
  (Object.prototype.sort = function () {
    return Object.keys(this)
      .sort()
      .reduce((obj, key) => {
        obj[key] = this[key];
        return obj;
      }, {});
  });
!Object.prototype.pick &&
  (Object.prototype.pick = function (path) {
    const result = {};
    for (let key of path) {
      this[key] && (result[key] = this[key]);
    }
    return result;
  });
!Object.prototype.omit &&
  (Object.prototype.omit = function (path) {
    const result = Object.assign({}, this);
    for (let key of path) {
      delete result[key];
    }
    return result;
  });
!Object.prototype.clone &&
  (Object.prototype.clone = function () {
    return Object.assign({}, this);
  });
!Object.prototype.merge &&
  (Object.prototype.merge = function () {
    var _this = Object.assign({}, this);
    Array.from(arguments).forEach(function (obj) {
      Object.assign(_this, obj);
    });
    return _this;
  });
!Object.prototype.size &&
  (Object.prototype.size = function () {
    return Object.keys(this).length;
  });
!Object.prototype.keys &&
  (Object.prototype.keys = function () {
    return Object.keys(this);
  });
!Object.prototype.values &&
  (Object.prototype.values = function () {
    return Object.values(this);
  });
!Object.prototype.firstCharUpperCase &&
  (Object.prototype.firstCharUpperCase = function () {
    Object.key(this).forEach((key) => {
      this[key.firstCharUpperCase()];
      delete this[key];
    });
  });

!Object.prototype.lowerCase &&
  (Object.prototype.lowerCase = function () {
    Object.key(this).forEach((key) => {
      this[key.toLowerCase()];
      delete this[key];
    });
  });
!Object.prototype.upperCase &&
  (Object.prototype.upperCase = function () {
    Object.key(this).forEach((key) => {
      this[key.toUpperCase()];
      delete this[key];
    });
  });
