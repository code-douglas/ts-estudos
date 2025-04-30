let x;

console.log(typeof x);

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;

  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');
