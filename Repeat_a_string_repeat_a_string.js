function repeat(str, num) {
  // repeat after me

  if (num >= 0) {
    return str.repeat(num);
  }
  else if (num < 0) {
    return "";
  }
}

repeat("abc", 3);
