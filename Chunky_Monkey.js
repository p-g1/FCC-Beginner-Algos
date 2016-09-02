function chunk(arr, size) {

  var myArr = [];


    for (var i = 0; i < arr.length; i+= size) {
      var slice = arr.slice(i, i+size);
        myArr.push(slice);
    }
  return myArr;

}
chunk(["a", "b", "c", "d"], 2);
