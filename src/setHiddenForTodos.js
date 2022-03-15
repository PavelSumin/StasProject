export const setHiddenForTodos = () => {
  let toggle = true;

  document.querySelector(".button").addEventListener("click", (event) => {
    event.target.innerText = toggle
      ? "Отобразить выполненные"
      : "Скрыть выполненные";
    // Если toggle true то добавляем класс hidden, если нет то убираем
    document.querySelectorAll(".todo_completed").forEach((todo) => {
      if (toggle) {
        todo.classList.add("hidden");
      } else {
        todo.classList.remove("hidden");
      }
      // Инвертим toggle, чтобьы следующий клик сделал противоположное действие
    });
    toggle = !toggle;
  });
};
