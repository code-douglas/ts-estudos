'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.squareOf = squareOf;
var x;
console.log(typeof x);
function squareOf(x) {
  if (typeof x === 'number') return x * x;
  return null;
}
var squareOfTwoNumber = squareOf(2);
var squareOfTwoString = squareOf('2');
