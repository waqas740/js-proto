module.exports = (array, size) => {
  var splitSize = array.length / size;
  var newArr = [];
  var startIndex = 0;
  var endIndex = size;
  for (var i = 0; i < splitSize; i++) {
    var chunk = array.slice(startIndex, endIndex);
    newArr.push(chunk);
    startIndex = startIndex + size;
    endIndex = endIndex + size;
  }
  return newArr;
};
