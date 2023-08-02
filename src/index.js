import "./style.css";
import { tarefas, projeto, listaProjeto } from "./tarefas";
import { tarefaDom, projetoDom } from "./domStuff";
import { tarefaForm, projectForm } from "./buttons";
let tarefinha = new tarefas("olha", "olha la", 1, "12/12");
let tarefinha2 = new tarefas("olha la", "olha la", 2, "12/12");
let tarefinha3 = new tarefas("olha laaaaaaaaaa", "olha la", 2, "12/12");
const umprojeto = new projeto("Cuidar do Chola");

umprojeto.tarefas.push(tarefinha);
umprojeto.tarefas.push(tarefinha2);
console.log(umprojeto);
console.log(umprojeto.tarefas);
listaProjeto.push(umprojeto);

let divTarefas = document.getElementById("tarefas");
divTarefas.appendChild(tarefaDom(tarefinha));
divTarefas.appendChild(tarefaDom(tarefinha2));
divTarefas.appendChild(tarefaDom(tarefinha3));
let divProjetos = document.getElementById("projetos");

let btnprojectForm = document.getElementById("criarProjeto");
btnprojectForm.addEventListener("click", function () {
  document.body.appendChild(projectForm(btnprojectForm));
});

console.log(listaProjeto);
let btnptaskForm = document.getElementById("tarefas");
btnptaskForm.addEventListener("click", function () {
  document.body.appendChild(tarefaForm());
});

for (let i = 0; i < listaProjeto.length; i++) {
  divProjetos.appendChild(projetoDom(listaProjeto[i]));
}

let testeProjeto = document.querySelectorAll("projeto");
console.log(testeProjeto);
