document.addEventListener("DOMContentLoaded", loadTodos);
document.getElementById("newBtn").addEventListener("click", addTodo);

function addTodo() {
    let task = prompt("Enter a new TO DO:");
    if (task) {
        createTodo(task, false);
        saveTodos();
    }
}

function createTodo(task, append = true) {
    let todoDiv = document.createElement("div");
    todoDiv.className = "todo";
    todoDiv.textContent = task;
    todoDiv.addEventListener("click", function () {
        if (confirm("Do you want to remove this TO DO?")) {
            todoDiv.remove();
            saveTodos();
        }
    });
    let list = document.getElementById("ft_list");
    if (append) {
        list.appendChild(todoDiv);
    } 
    else {
        list.insertBefore(todoDiv, list.firstChild);
    }
}

function saveTodos() {
    let todos = [];
    document.querySelectorAll(".todo").forEach(todo => {
        todos.push(todo.textContent);
    });
    document.cookie = "todos=" + JSON.stringify(todos) + "; path=/";
}

function loadTodos() {
    let cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        if (cookie.startsWith("todos=")) {
            let todos = JSON.parse(cookie.split("=")[1]);
            todos.forEach(task => createTodo(task, true));
        }
    }
}