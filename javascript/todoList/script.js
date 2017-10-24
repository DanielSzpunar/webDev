var todoList = {
    todos:[],
    displayTodos: function() {
        if(this.todos.length === 0) {
            console.log("Your todo list is empty.");
        }
            else {
                for (var i = 0; i < this.todos.length; i++) {
                    if(this.todos[i].completed == true) {
                        console.log(this.todos[i].todoText + "  (x)");
                    }
                    else {
                        console.log(this.todos[i].todoText + "  ( )");
                    }
                    //console.log(this.todos[i].todoText + ", completed: " + this.todos[i].completed);
                }
            }
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        this.todos[position].completed = !this.todos[position].completed;
        this.displayTodos();
    },
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        if (totalTodos === completedTodos) {
            for(var j = 0; j < this.todos.length; j++) {
                this.todos[j].completed = false;
            }
        }
        else {
            for (var k = 0; k < this.todos.length; k++) {
              this.todos[k].completed = true;  
            }
        }
        this.displayTodos();
    },
    deleteTodo: function(position){
        todoList.todos.splice(position,1);
    }  
};
var handlers = {
    /*displayTodos: function() {
        todoList.displayTodos();
        
    },*/
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    },
    addTodo: function(){
        var addTodoText = document.getElementById("addTodoText").value;
        todoList.addTodo(addTodoText);
        addTodoText ="";
        view.displayTodos();
    },
    changeTodo: function(){
       var changeTodoPosition = document.getElementById("changeTodoPosition").valueAsNumber;
       var changeTodoText = document.getElementById("changeTodoText").value; 
       todoList.changeTodo(changeTodoPosition, changeTodoText);
       changeTodoPosition = "";
       changeTodoText = "";
       view.displayTodos();
    }, 
    deleteTodo: function() {
        var deleteTodo = document.getElementById("deleteTodo").valueAsNumber;
        todoList.deleteTodo(deleteTodo);
        deleteTodo = "";
       view.displayTodos();
    },
    toggleComplete: function() {
        var toggleComplete = document.getElementById("toggleComplete").valueAsNumber;
        todoList.toggleCompleted(toggleComplete);
        toggleComplete = "";
        view.displayTodos();
    }
};

var view = {
    displayTodos: function(){
        var todoUl = document.querySelector("ul");
        todoUl.innerHTML = "";
        for (var i = 0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement("li");
            var todoTextWithCompletion = "";
            if (todoList.todos[i].completed === true) {
                todoLi.textContent = "(x) " + todoList.todos[i].todoText;
                todoUl.appendChild(todoLi);
            }
            else {
                todoLi.textContent = "() " + todoList.todos[i].todoText;
                todoUl.appendChild(todoLi);
            }
        }
    }
};
/*

todoList.addTodo("item 1");
todoList.addTodo("item 2");

*/
    