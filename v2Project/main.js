import renderList from "./scripts/renderList.js";
import {
  handleConfirmSkip,
  handleConfirmRemoveSkip,
} from "./scripts/paginationSystem.js";
import checkCurrentPosition from "./scripts/scroll.js";
import renderDeletedUsersList from "./scripts/renderDeletedUsersList.js";

const loadMorePageBtn = document.querySelector("#morePage");
const loadLessBtn = document.querySelector("#lessPage");

renderList();
renderDeletedUsersList();
handleConfirmRemoveSkip();

loadMorePageBtn.addEventListener("click", () => {
  handleConfirmSkip();
});
loadLessBtn.addEventListener("click", () => {
  handleConfirmRemoveSkip();
});

window.addEventListener("scroll", () => {
  checkCurrentPosition();
});
