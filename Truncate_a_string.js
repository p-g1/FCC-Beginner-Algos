function truncate(str, num) {

  var trun = "...";
  var snip = str.slice(0, num-3);
  var short = str.slice(0, num);

  if (num <= 3) {
    return short + trun;
  }
  else if (str.length <= num) {
    return str;
  }
  else if (str.length > num) {
    return snip + trun;
  }
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
