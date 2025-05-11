'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Colaborador = exports.Empress = void 0;
var Empress = /** @class */ (function () {
  function Empress(name, cnpj) {
    this.collabs = [];
    this.name = name;
    this.cnpj = cnpj;
  }
  Empress.prototype.addNewCollabs = function (collab) {
    this.collabs.push(collab);
  };
  Empress.prototype.showCollabs = function () {
    for (var _i = 0, _a = this.collabs; _i < _a.length; _i++) {
      var collab = _a[_i];
      console.log(collab);
    }
  };
  return Empress;
})();
exports.Empress = Empress;
var Colaborador = /** @class */ (function () {
  function Colaborador(nome, surName, age, ageOnEmpress) {
    this.nome = nome;
    this.surName = surName;
    this.age = age;
    this.ageOnEmpress = ageOnEmpress;
    this.nome = nome;
    this.surName = surName;
    this.age = age;
    this.ageOnEmpress = ageOnEmpress;
  }
  return Colaborador;
})();
exports.Colaborador = Colaborador;
var atento = new Empress('Atento', '11.111.111/0001-11');
var collab1 = new Colaborador('Douglas', 'de Souza', 22, 1);
var collab2 = new Colaborador('Maria', 'Eduarda', 21, 1);
var collab3 = new Colaborador('Marcelo', 'Eusebio', 22, 2);
atento.addNewCollabs(collab1);
atento.addNewCollabs(collab2);
atento.addNewCollabs(collab3);
atento.showCollabs();
