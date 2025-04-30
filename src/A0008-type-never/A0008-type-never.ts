export function makeError(): never {
  throw new Error('Erro qualquer.');
}

makeError();
