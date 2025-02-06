$(document).ready(function () {
    loadTodos();
    
    $("#newBtn").click(function () {
        let task = prompt("Enter a new TO DO:");
        if (task) {
            createTodo(task, false);
            saveTodos();
        }
    });

    function createTodo(task, append = true) {
        let todoDiv = $("<div></div>").addClass("todo").text(task);
        todoDiv.click(function () {
            if (confirm("Do you want to remove this TO DO?")) {
                $(this).remove();
                saveTodos();
            }
        });

        if (append) {
            $("#ft_list").append(todoDiv);
        } else {
            $("#ft_list").prepend(todoDiv);
        }
    }

    function saveTodos() {
        let todos = [];
        $(".todo").each(function () {
            todos.push($(this).text());
        });
        document.cookie = "todos=" + JSON.stringify(todos) + "; path=/";
    }

    function loadTodos() {
        let cookies = document.cookie.split("; ");
        for (let cookie of cookies) {
            if (cookie.startsWith("todos=")) {
                let todos = JSON.parse(cookie.split("=")[1]);
                todos.forEach(function (task) {
                    createTodo(task, true);
                });
            }
        }
    }
});