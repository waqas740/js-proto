module.exports = (array, second) => {
  var firstProps = Object.getOwnPropertyNames(array);
  var secondProps = Object.getOwnPropertyNames(second);

  if (firstProps.length != secondProps.length) {
    return false;
  }

  for (var i = 0; i < firstProps.length; i++) {
    var propName = firstProps[i];
    if (array[propName] !== second[propName]) {
      return false;
    }
  }

  // If we made it array far, objects
  // are considered equivalent
  return true;
};
