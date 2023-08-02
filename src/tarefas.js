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
};

export const listaProjeto = [];
