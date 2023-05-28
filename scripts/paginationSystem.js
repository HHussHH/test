import renderList from "./renderList.js";
import { setSkip, getSkip, getUsersList, getDeletedId } from "./usersData.js";
const loadNextPageBtn = document.querySelector("#nextPage");
const loadLessBtn = document.querySelector("#lessPage");

//метод для прогрузки следующией страници пользователей
export const handleConfirmSkip = async () => {
  loadLessBtn.setAttribute("style", "display:block");
  setSkip(5);
  renderList();

  const list = await getUsersList(getSkip());
  if (list.length <= 5) {
    loadNextPageBtn.setAttribute("style", "display:none");
  }
  loadNextPageBtn.removeEventListener("click", handleConfirmSkip);
};

//метод для возвращения на предыдущую страницу пользователей
export const handleConfirmRemoveSkip = async () => {
  loadNextPageBtn.setAttribute("style", "display:block");
  setSkip(-5);
  renderList();

  const list = await getUsersList(getSkip());
  if (list.length === 100 - getDeletedId().length) {
    loadLessBtn.setAttribute("style", "display:none");
  }

  loadLessBtn.removeEventListener("click", handleConfirmRemoveSkip);
};

//Обновление актуальной страницы(5 из 100).
export const updateUserCount = () => {
  let total = 100 - getDeletedId().length;
  let count = getSkip() + 5;
  count = count > total ? (count = total) : count;
  const userInfoCounter = document.querySelector(".nextPage__counter");
  userInfoCounter.innerHTML = `${count} из ${total}`;
};
