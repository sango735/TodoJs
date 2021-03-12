function todo() {
    const form = document.getElementById("todo-form");
    const output = document.getElementById("output-todo");
    const submit = document.getElementById("todo-submit");

    form.addEventListener("input", () =>{
        const inputTodo = document.getElementById("input-todo");
        const inputValue =  inputTodo.value;
        if(inputValue != ""){
            submit.disabled = false;
        }else{
            submit.disabled = true;
        }
    });
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const submitTodo = document.getElementById("input-todo");
        const submitValue =  submitTodo.value;
        const checkBox = '<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">';
        const listTodo = checkBox + '<label class="form-check-label" for="flexCheckChecked">' + submitValue + '</label></div>';
        output.insertAdjacentHTML("beforeend", listTodo);
        form.reset();
        submit.disabled = true;
    });
}
window.addEventListener("load", todo);