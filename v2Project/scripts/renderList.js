import { updateUserCount } from "./paginationSystem.js";
import { setUsersList, getUsersList } from "./usersData.js";
import { openDeleteMenu } from "./deleteButtonSystem.js";

let maxCountViewUsers = 5;

const renderList = async (newCount = maxCountViewUsers) => {
  const userList = document.querySelector(".userList");

  const usersInfo = await getUsersList();

  maxCountViewUsers = newCount;
  userList.innerHTML = "";

  usersInfo.forEach((user) => {
    if (userList.childElementCount === maxCountViewUsers) return;
    const li = document.createElement("li");
    li.classList.add("userList__user");
    li.id = user.id;
    li.addEventListener("click", () => openDeleteMenu(user.id));
    li.innerHTML = `
    <div class="userList__user__card">
        <img class="userList__user__card-icon" src="${user.image}"/>
        <span class="userList__user__card-content">
          <h5 class="userList__user__card-content-firstName">${
            user.firstName
          } </h5>
            <p class="userList__user__card-content-email">${user.email}${
      user.phone ? " / " + user.phone : ""
    }</p>
        </span>
      </div>
      <a class="userList__user__btn"><img src="../img/TrashBacket.svg" alt="TrashBacket"></a>
      `;
    userList.appendChild(li);
  });

  updateUserCount(usersInfo.length);
  setUsersList(usersInfo);
};

export default renderList;
