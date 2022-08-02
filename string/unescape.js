module.exports = (str) => {
  return str.replace(
    /&amp;|&lt;|&gt;|&quot;|&#x27;|&#x2F;|&#x60;|&#x3D;/g,
    function (s) {
      return {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#x27;": "'",
        "&#x2F;": "/",
        "&#x60;": "`",
        "&#x3D;": "=",
      }[s];
    }
  );
};
