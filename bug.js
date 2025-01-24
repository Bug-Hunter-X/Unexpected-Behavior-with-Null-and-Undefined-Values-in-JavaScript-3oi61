function foo(a, b) {
  if (a === null || b === null) {
    return null; //This will cause unexpected behavior if a or b is undefined
  }
  return a + b;
}