function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acc, curr) => acc * curr, 1);
}

function toUpperCase(...args: string[]): string[] {
  return args.map((arg) => arg.toUpperCase());
}

console.log(multiplicaArgs(1, 2, 3, 4, 5));
console.log(toUpperCase('Um', 'Dois', 'Três', 'Quatro', 'Cinco'));
