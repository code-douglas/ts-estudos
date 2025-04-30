type Idade = number;
type RgbColor = 'Vermelho' | `Amarelo` | `Azul`;
type CmykColor = 'Ciano' | `Magenta` | `Verde`;
type preferColor = RgbColor | CmykColor;
type Pessoa = {
  name: string;
  age: Idade;
  email: string;
  salary: Idade;
  prefererColor?: preferColor;
};

const person: Pessoa = {
  name: 'Douglas',
  age: 18,
  email: 'douglas.contato@dev.info',
  salary: 1518,
  prefererColor: 'Amarelo',
};

console.log(person);

export default person;
