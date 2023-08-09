import { tarefaDom } from "./domStuff";
export const tarefas = function (name, description, priority, dueDate) {
  this.name = name;
  this.description = description;
  this.priority = priority;
  this.dueDate = dueDate;
  this.status = false;
};

export const projeto = function (name, index) {
  this.name = name;
  this.index = index;
  this.tarefas = [];

  this.displayTarefas = function () {
    //console.log(this.tarefas);
    let divTarefas = document.getElementById("tarefas");
    while (divTarefas.firstChild) {
      divTarefas.removeChild(divTarefas.firstChild);
    }
    for (let i = 0; i < this.tarefas.length; i++) {
      // console.log(this.tarefas[i]);
      divTarefas.appendChild(tarefaDom(this.tarefas[i]));
    }
  };
};

export const listaProjeto = [];
