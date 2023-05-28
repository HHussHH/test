const maxCountViewUsers = 5;
import { getUsersList, getSkip, setUsersList } from "./usersData.js";
import { updateUserCount } from "./paginationSystem.js";
const renderList = async () => {
  const usersInfo = await getUsersList(getSkip());

  const userList = document.querySelector(".userList");

  userList.innerHTML = "";
  usersInfo.forEach((user) => {
    if (userList.childElementCount === maxCountViewUsers) return;
    const li = document.createElement("li");
    li.classList.add("userList__user");
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
      <a class="userList__user__btn" id=${
        user.id
      }><img src="./img/TrashBacket.svg" alt="TrashBacket"></a>
      `;

    userList.appendChild(li);
  });
  updateUserCount();
};

export default renderList;
