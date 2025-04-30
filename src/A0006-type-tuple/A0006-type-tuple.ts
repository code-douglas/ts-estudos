const dadosCliente01: [number, string] = [1, 'Douglas'];
const dadosCliente02: [number, string, ...string[]] = [
  1,
  'Douglas',
  'de Souza',
];

dadosCliente01[0] = 10;
dadosCliente01.push('Outro valor'); // Adiciona um novo valor no array, mas não altera o tipo do array.

console.log(dadosCliente01);
console.log(dadosCliente02);
