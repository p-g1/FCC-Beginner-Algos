function destroyer(arr) {
  var toDestroy = [];

  for (var i = 1; i < arguments.length; i++) {
    toDestroy.push(arguments[i]);
  }

  var toSurvive = arguments[0].filter(function(element, index) {
    var toReturn = true;

  for (var i = 0; i < toDestroy.length; i++) {
    if (element === toDestroy[i]) {
      toReturn = false;
    }
  }
  return toReturn;

});
  return toSurvive;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
