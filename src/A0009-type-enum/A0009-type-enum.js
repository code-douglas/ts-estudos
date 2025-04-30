var Colors;
(function (Colors) {
  Colors[(Colors['RED'] = 10)] = 'RED';
})(Colors || (Colors = {}));
(function (Colors) {
  Colors[(Colors['BLUE'] = 100)] = 'BLUE';
  Colors[(Colors['YELLOW'] = 1000)] = 'YELLOW';
  Colors['PURPLE'] = 'PURPLE';
})(Colors || (Colors = {}));
function chooseAColor(color) {
  console.log('The color choosed is ', Colors[color]);
}
chooseAColor(Colors.PURPLE);
// console.log(Colors);
// console.log(Colors[10]);
// console.log(Colors.ROXO);
