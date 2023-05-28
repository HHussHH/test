import renderList from "./renderList.js";

import { getUsersList } from "./usersData.js";
let currentLoadUser = 0;

const usersUlList = document.querySelector(".userList");
const loadMorePageBtn = document.querySelector("#morePage");
const loadLessBtn = document.querySelector("#lessPage");

//метод для прогрузки доп. 5 элементов из 100 доступных (10/100 и тп)
export const handleConfirmSkip = () => {
  const usersInfo = getUsersList();
  currentLoadUser = currentLoadUser + 5;
  if (currentLoadUser === usersInfo.length) {
    loadMorePageBtn.setAttribute("style", "display:none");
  }
  loadLessBtn.setAttribute("style", "display:block");
  renderList(currentLoadUser);
};

//метод для возвращения на базовые 5 элементов из 100
export const handleConfirmRemoveSkip = () => {
  loadLessBtn.setAttribute("style", "display:none");
  currentLoadUser = 5;
  loadMorePageBtn.setAttribute("style", "display:block");
  renderList(currentLoadUser);
};

const userInfoCounter = document.querySelector(".nextPage__counter");
//Обновление актуального кол-во пользователей на странице (15 из 100).
export const updateUserCount = (total) => {
  userInfoCounter.innerHTML = `${usersUlList.childElementCount} из ${total}`;
};
