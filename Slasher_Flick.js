function slasher(arr, howMany) {
  // it doesn't always pay to be first
  for (var i =0; i < arr.length; i++) {
    myArr = arr.slice(i,i+howMany);
  }
  if (arr.length < howMany) {
    return [];
  }
  else if (howMany === 0) {
    return arr;
  }
  else {
    return myArr;
  }
}

slasher([1, 2, 3], 2);
