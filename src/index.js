import "./style.css";
import { tarefas, projeto, listaProjeto } from "./tarefas";
import { tarefaDom, projetoDom } from "./domStuff";
import { tarefaForm, projectForm } from "./buttons";
/* let tarefinha = new tarefas("olha", "olha la", 1, "12/12");
let tarefinha2 = new tarefas("olha la", "olha la", 2, "12/12");
let tarefinha3 = new tarefas("olha laaaaaaaaaa", "olha la", 2, "12/12");
const umprojeto = new projeto("Cuidar do Chola", 1);

umprojeto.tarefas.push(tarefinha);
umprojeto.tarefas.push(tarefinha2);

listaProjeto.push(umprojeto);
 */
let divProjetos = document.getElementById("projetos");

let btnprojectForm = document.getElementById("criarProjeto");
btnprojectForm.addEventListener("click", function () {
  document.body.appendChild(projectForm(btnprojectForm));
});

let btnptaskForm = document.getElementById("tarefas");
btnptaskForm.addEventListener("click", function () {
  document.body.appendChild(tarefaForm());
});

divProjetos.addEventListener("click", function (event) {
  if (event.target.classList.contains("projeto")) {
    console.log("Clicked on:", event.target.textContent);
    console.log("Clicked on:", event.target.getAttribute("dataindex"));
    let index = parseInt(event.target.getAttribute("dataindex")) - 1;
    console.log(index);
    console.log(listaProjeto);
    console.log(listaProjeto[index]);
    let tarefinha2 = new tarefas("olha la", "olha la", 2, "12/12");
    // let tarefinha3 = new tarefas("olha laaaaaaaaaa", "olha la", 2, "12/12");
    listaProjeto[index].tarefas.push(tarefinha2);
    // listaProjeto[index].push(tarefinha3);

    listaProjeto[index].displayTarefas();
  }
});
