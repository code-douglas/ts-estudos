'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function mapString(array, callbackfn) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }
  return newArray;
}
var abc = ['a', 'b', 'c'];
var mappedAbc = mapString(abc, function (item) {
  return item.toUpperCase();
});
exports.default = mapString;
console.log(mappedAbc);
