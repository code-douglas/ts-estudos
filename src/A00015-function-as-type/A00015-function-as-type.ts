function mapString(array: string[], callbackfn: CallableFunction): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const mappedAbc = mapString(abc, function (item: any) {
  return item.toUpperCase();
});

export default mapString;

console.log(mappedAbc);
