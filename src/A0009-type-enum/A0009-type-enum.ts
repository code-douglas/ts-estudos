enum Colors {
  RED = 10,
}

enum Colors {
  BLUE = 100,
  YELLOW = 1000,
  PURPLE = 'PURPLE',
}

function chooseAColor(color: Colors): void {
  console.log('The color choosed is ', Colors[color]);
}

chooseAColor(Colors.PURPLE);

// console.log(Colors);
// console.log(Colors[10]);
// console.log(Colors.ROXO);
