function AppViewModel() {
  var self = this;

  self.todoInput = ko.observable("");
  self.todoList = ko.observableArray([]);

  self.addTodo = function () {
    if (!self.todoInput()) {
      return;
    } else {
      var todoObj = {
        id: self.todoList().length + 1,
        title: self.todoInput(),
        complete: ko.observable(false),
        visible: ko.observable(true)
      };
      self.todoList.push(todoObj);
      self.todoInput("");
    }
  };

  self.clearAll = function () {
    self.todoList([]);
  };

  self.deleteTodo = function (todo) {
    console.log(todo);
    self.todoList.remove(todo);
  };

  self.toggleComplete = function (todo) {
    todo.complete(!todo.complete());
  };
  self.filterType = ko.observable("showAll");

  self.filterTodos = function () {
    switch (self.filterType()) {
      case "showAll":
       
        self.todoList().forEach(function (todo) {
          todo.visible(true);
          console.log(todo.visible);
        });
        break;
      case "notCompleted":
     
        self.todoList().forEach(function (todo) {
          todo.visible(!todo.complete());
        });
        break;
      case "completed":
        self.todoList().forEach(function (todo) {
          todo.visible(todo.complete());
        });
        break;
    }
  };
}

ko.applyBindings(new AppViewModel());
