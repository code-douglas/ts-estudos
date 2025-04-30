const person = {
  name: 'Douglas' as const,
  surName: 'de Souza',
};

function chooseColor(cor: 'Vermelho' | `Amarelo` | `Azul`): string {
  return cor;
}

console.log(chooseColor('Vermelho'));

console.log(person);

person.surName = 'Marcelo';

console.log(person);
