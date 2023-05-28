//Тут комментарии будут потом....
import renderList from "./scripts/renderList.js";
import { deleteButtonHandler } from "./scripts/deleteButtonSystem.js";
import {
  handleConfirmSkip,
  handleConfirmRemoveSkip,
} from "./scripts/paginationSystem.js";
import checkCurrentPosition from "./scripts/scroll.js";

const loadNextPageBtn = document.querySelector("#nextPage");
const loadLessBtn = document.querySelector("#lessPage");
loadLessBtn.setAttribute("style", "display:none");
//первичная инициализация списка пользователей и первичного отступа
renderList();

//обработка клика на кнопку для удаления пользователя
deleteButtonHandler();

loadNextPageBtn.addEventListener("click", () => {
  handleConfirmSkip();
});

loadLessBtn.addEventListener("click", () => {
  handleConfirmRemoveSkip();
});

window.addEventListener("scroll", () => {
  checkCurrentPosition();
});
