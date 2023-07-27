export const tarefas = function (name, description, priority, dueDate) {
  this.name = name;
  this.description = description;
  this.priority = priority;
  this.dueDate = dueDate;
  this.status = false;
};

export const projeto = function (name) {
  this.name = name;
  this.tarefas = [];
};

export const listaProjeto = [];
