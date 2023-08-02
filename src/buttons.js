import { listaProjeto, projeto } from "./tarefas";
import { projetoDom } from "./domStuff";
export function projectForm() {
  const element = document.createElement("form");
  element.classList.add("projectForm");
  const titulodoProjeto = document.createElement("input");
  titulodoProjeto.type = "text";
  titulodoProjeto.placeholder = "Project name";
  element.appendChild(titulodoProjeto);

  const submitButton = document.createElement("button");
  submitButton.classList.add("submitProject");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";

  element.appendChild(submitButton);
  let divProjetos = document.getElementById("projetos");
  element.addEventListener("submit", function (e) {
    e.preventDefault();

    const newProject = new projeto(
      titulodoProjeto.value,
      listaProjeto.length + 1
    );
    listaProjeto.push(newProject);
    console.log(listaProjeto);
    console.log(newProject.index);
    for (let i = listaProjeto.length - 1; i < listaProjeto.length; i++) {
      divProjetos.appendChild(projetoDom(listaProjeto[i]));
    }
    document.body.removeChild(element);
  });
  return element;
}

export function tarefaForm() {
  const formElement = document.createElement("form");
  const nomeDaTarefa = document.createElement("input");
  nomeDaTarefa.type = "text";
  nomeDaTarefa.placeholder = "Enter task Name";
  formElement.appendChild(nomeDaTarefa);

  const taskDescription = document.createElement("input");
  taskDescription.type = "text";
  taskDescription.placeholder = "Describe your task";
  formElement.appendChild(taskDescription);

  const taskPriority = document.createElement("input");
  taskPriority.type = "number";
  taskPriority.placeholder = "Between 1-3 how important is this task";
  formElement.appendChild(taskPriority);

  const dateTask = document.createElement("input");
  dateTask.type = "date";
  formElement.appendChild(dateTask);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  formElement.appendChild(submitButton);

  return formElement;
}
