const setHiddenForTodos = () => {

    let toggle = true;

    document
        .querySelector('.button')
        .addEventListener('click', function (event) {
            event.target.innerText = toggle ? 'Отобразить выполненные' : 'Скрыть выполненные'
            toggle = !toggle;


            document
                .querySelectorAll('.todo_completed')
                .forEach(hidden => hidden.hidden = !toggle)
        })
}

export {setHiddenForTodos}