# Unexpected Behavior with Null and Undefined Values in JavaScript

This repository demonstrates a common JavaScript bug related to the loose comparison of null and undefined values.  The `foo` function is intended to handle cases where either `a` or `b` is null, but it doesn't correctly handle situations where either is undefined.  This can lead to unexpected results and potential errors in applications.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version.