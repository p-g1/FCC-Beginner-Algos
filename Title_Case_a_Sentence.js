function titleCase(str) {
  var low = str.toLowerCase();
  var words = low.split(" ");
  var results = [];

  for (var i = 0; i < words.length; i++) {
    var letter = words[i].charAt(0).toUpperCase();
    results.push(letter + words[i].slice(1));
  }

  return results.join(" ");
}

titleCase("I'm a little tea pot");
