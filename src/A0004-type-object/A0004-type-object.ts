const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown; // Forma de ter um objeto aberto, onde não sabe o valor e o tipo.
} = {
  chaveA: 'Um',
  chaveB: 'Dois',
};

// objetoA.chaveA = 'Outro valor 1';
objetoA.chaveB = 'Outro valor 2';
objetoA.chaveC = 'Outro valor 3';
// Não é possivel criar uma nova chave;
