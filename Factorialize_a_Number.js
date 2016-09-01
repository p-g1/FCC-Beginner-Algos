function factorialize(num) {
  var newArr = [];
  var total = 1;
  for (var i=1; i <= num; i++) {
  newArr.push(i);
}

  for (var i= 0; i < newArr.length; i++) {
  total *= newArr[i];
  }
  return total;
}

factorialize(5);
