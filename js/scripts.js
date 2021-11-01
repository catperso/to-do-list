// Business logic for task """"database"""
function ToDoList() {
  this.tasks = {};
  this.currentId = 0;
}

ToDoList.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
};

ToDoList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks[task.id] = task;
};

ToDoList.prototype.deleteTask = function(id) {
  if (this.tasks[id] === undefined) {
    return false;
  }
  delete this.tasks[id];
  return true;
};

ToDoList.prototype.completeTask = function(id) {
  if (this.tasks[id] === undefined) {
    return false;
  }
  this.tasks[id].complete = true;
};

ToDoList.prototype.uncompleteTask = function(id) {
  if (this.tasks[id] === undefined) {
    return false;
  }
  this.tasks[id].complete = false;
};

// Business logic for tasks
function Task(description) {
  this.task = description;
  this.complete = false;
}