let todo = () =>{
    const form = document.getElementById("todo-form");
    const output = document.getElementById("output-todo");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let inputTodo = document.getElementById("input-todo");
        let inputValue =  inputTodo.value;
        let checkBox = '<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">';
        let listTodo = checkBox + '<label class="form-check-label" for="flexCheckChecked">' + inputValue + '</label></div>';
        output.innerHTML = listTodo;
    });
}