function todo() {
    const form = document.getElementById("todo-form");
    const output = document.getElementById("output-todo");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputTodo = document.getElementById("input-todo");
        const inputValue =  inputTodo.value;
        const checkBox = '<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">';
        const listTodo = checkBox + '<label class="form-check-label" for="flexCheckChecked">' + inputValue + '</label></div>';
        output.insertAdjacentHTML("afterend", listTodo);
    });
}

window.addEventListener("load", todo);