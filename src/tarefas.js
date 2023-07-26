export function ola() {
  console.log("hello");
  let tarefa1 = new tarefas("Passear", "Andar com o chola", 1, "26/01");
  console.log(tarefa1.name);
}

export function tarefas(name, description, priority, dueDate) {
  this.name = name;
  this.description = description;
  this.priority = priority;
  this.dueDate = dueDate;
  this.status = false;
}
