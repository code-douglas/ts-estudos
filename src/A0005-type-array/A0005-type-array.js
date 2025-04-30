function multiplicaArgs() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return args.reduce(function (acc, curr) {
    return acc * curr;
  }, 1);
}
function toUpperCase() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return args.map(function (arg) {
    return arg.toUpperCase();
  });
}
console.log(multiplicaArgs(1, 2, 3, 4, 5));
console.log(toUpperCase('Um', 'Dois', 'Três', 'Quatro', 'Cinco'));
