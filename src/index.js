import "./style.css";
import { ola } from "./tarefas";
import { projeto } from "./projeto";
function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello";
  element.classList.add("hello");

  return element;
}
let cuidarDochola = new projeto("Cuidar do Chola");

ola();
document.body.appendChild(component());
