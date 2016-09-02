function end(str, target) {

  var sub = str.substr(str.length-(target.length));

  if (sub === target) {
    return true;
  }
  else {
    return false;
  }
}
end("Bastian", "n");
