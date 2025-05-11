export class Empress {
  // Public é redundante
  readonly name: string;
  private readonly collabs: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addNewCollabs(collab: Colaborador): void {
    this.collabs.push(collab);
  }

  showCollabs(): void {
    for (const collab of this.collabs) {
      console.log(collab);
    }
  }
}

export class Colaborador {
  constructor(
    public nome: string,
    public surName: string,
    public age: number,
    public ageOnEmpress: number,
  ) {
    this.nome = nome;
    this.surName = surName;
    this.age = age;
    this.ageOnEmpress = ageOnEmpress;
  }
}

const atento = new Empress('Atento', '11.111.111/0001-11');
const collab1 = new Colaborador('Douglas', 'de Souza', 22, 1);
const collab2 = new Colaborador('Maria', 'Eduarda', 21, 1);
const collab3 = new Colaborador('Marcelo', 'Eusebio', 22, 2);
atento.addNewCollabs(collab1);
atento.addNewCollabs(collab2);
atento.addNewCollabs(collab3);

atento.showCollabs();
