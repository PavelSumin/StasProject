import { getDataTodos } from "./getDataTodos";
import { createHtmlDocument } from "./createHtmlDocument";
import { setHiddenForTodos } from "./setHiddenForTodos";

/**так как скрипт перенесен в хед то ждем загрузки дом дерева */
document.addEventListener("DOMContentLoaded", () => {
  getDataTodos()
    .then((json) => {
      document
        .querySelector("#test")
        .insertAdjacentHTML("afterbegin", createHtmlDocument(json));
    })
    .catch((error) => console.log(error));
  setHiddenForTodos();
});
