function palindrome(str) {
  // Good luck!
   str.toLowerCase();
  var rep = low.replace(/\s+/g, '');
  var repp = rep.replace(/\./g, '');
  var reppp = repp.replace(/[^A-Za-z0-9]/g, '');
  var spli = reppp.split("");
  var rev = spli.reverse();
  var joi = rev.join("");


  if (joi === reppp) {
    return true;
  }
  else {
    return false;
  }
}

palindrome("A man, a plan, a canal. && / \ _ -Panamat");
