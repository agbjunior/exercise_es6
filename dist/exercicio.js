"use strict";

var alunos = [{
  nome: "Adilson Barros",
  nota: 8
}, {
  nome: "Antonio Medeiros",
  nota: 6
}, {
  nome: "João Paulo",
  nota: 7
}, {
  nome: "Bianca Nunes",
  nota: 4
}, {
  nome: "Lucas Barbosa",
  nota: 9
}, {
  nome: "João Pedro",
  nota: 6
}, {
  nome: "Bianca Matos",
  nota: 6
}, {
  nome: "Lucas Souza",
  nota: 9
}, {
  nome: "Roberto Pedro",
  nota: 6
}, {
  nome: "Juan Matos",
  nota: 6
}, {
  nome: "Nuno Souza",
  nota: 9
}, {
  nome: "Gisele Aragao",
  nota: 4
}, {
  nome: "Luis Lopes",
  nota: 5
}, {
  nome: "Flavio Santana",
  nota: 3
}, {
  nome: "Carla Souza",
  nota: 2
}];
function filtrarAlunosComNotaSeis(item) {
  return item.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var alunosAprovados = filtrarAlunosComNotaSeis(alunos);
console.log(alunosAprovados);