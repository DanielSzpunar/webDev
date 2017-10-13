var todos = ["item 1", "item 2", "item 3"];

function displayTodos() {
    console.log("our todos: ", todos);
}
function addTodo(newTodo) {
    todos.push(newTodo);
    displayTodos();
}
function deleteTodo() {
    todos.pop();
    displayTodos();
}
function changeTodo(newTodo, position) {
todos[position] = newTodo;
displayTodos();
}
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}
    