function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return null; //Correctly handles both null and undefined values 
  }
  return a + b;
}