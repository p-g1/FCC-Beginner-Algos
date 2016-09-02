function rot13(str) {

  var charCode = [];
  for (i=0; i<str.length; i++) {
    charCode.push(str.charCodeAt(i));
  }

  var newArr = [];
  function transpose(arr) {
    for (i=0; i<arr.length; i++) {
      if (64 < arr[i] && arr[i] < 78) {
        newArr.push(arr[i] + 13);
      } else if (78 <= arr[i] && arr[i] < 91) {
        newArr.push(arr[i] - 13);
      } else {
        newArr.push(arr[i]);
      }
      }
    }
    transpose(charCode);

  var result = [];
  for (i = 0; i < newArr.length; i++) {
    result.push(String.fromCharCode(newArr[i]));
  }
 return result.join("");
}

rot13("SERR PBQR PNZC");
