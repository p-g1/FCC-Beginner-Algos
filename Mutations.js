function mutation(arr) {
  var myArr = arr[1].toLowerCase().split('');
  var test = arr[0].toLowerCase().split('');

  for (var i = 0; i < myArr.length; i++) {
    if (test.indexOf(myArr[i]) < 0) {
      return false;
    }
    }

  return true;

}

mutation(["hello", "hey"]);
