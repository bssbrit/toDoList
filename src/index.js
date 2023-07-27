import "./style.css";
import { tarefas, projeto, listaProjeto } from "./tarefas";

let tarefinha = new tarefas("olha", "olha la", 1, "12/12");
let tarefinha2 = new tarefas("olha la", "olha la", 2, "12/12");

const umprojeto = new projeto("Cuidar do Chola");

umprojeto.tarefas.push(tarefinha);
umprojeto.tarefas.push(tarefinha2);
console.log(umprojeto);
console.log(umprojeto.tarefas);
listaProjeto.push(umprojeto);
console.log(listaProjeto);
