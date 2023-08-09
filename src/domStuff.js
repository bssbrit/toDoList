//criador div tarefas

export function tarefaDom(objTarefa) {
  const element = document.createElement("div");
  element.classList.add("tarefa");

  const titulo = document.createElement("H4");
  titulo.innerHTML = objTarefa.name;
  const description = document.createElement("p");
  description.innerHTML = objTarefa.description;

  const data = document.createElement("p");
  data.innerHTML = objTarefa.dueDate;

  element.appendChild(titulo);
  element.appendChild(description);
  element.appendChild(data);
  return element;
}

//criador div projeto

export function projetoDom(objProjeto, i) {
  const element = document.createElement("div");
  element.classList.add("projeto");
  element.textContent = objProjeto.name;
  /*  const titulo = document.createElement("H4");
  titulo.innerHTML = objProjeto.name; */

  element.setAttribute("dataIndex", objProjeto.index);

  return element;
}

//botões para criar tarefas e projetos
