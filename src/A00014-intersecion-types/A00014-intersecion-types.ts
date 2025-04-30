type HasName = { name: string };
type HasSurName = { surName: string };
type HasAge = { age: number };
type Person = HasName & HasSurName & HasAge;

const mySelf: Person = {
  name: 'Douglas',
  surName: 'de Souza',
  age: 22,
};

console.log(mySelf);
