function todo() {
    const form = document.getElementById("todo-form");
    const output = document.getElementById("output-todo");
    const submit = document.getElementById("todo-submit");
    const inputTodo = document.getElementById("input-todo");

    //入力した内容が空白の場合にボタンを押せなくする処理
    form.addEventListener("input", () =>{
        const inputValue =  inputTodo.value;
        if(inputValue != ""){
            submit.disabled = false;
        }
    });

    //入力内容の送信とフォームのリセット処理
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const submitValue =  inputTodo.value;
        const checkBox = '<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">';
        const listTodo = checkBox + '<label class="form-check-label" for="flexCheckChecked">' + submitValue + '</label></div>';
        output.insertAdjacentHTML("beforeend", listTodo);
        form.reset();
        submit.disabled = true;
    });
}
window.addEventListener("load", todo);