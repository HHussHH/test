import {getDeletedUsersInfo} from "./usersData.js";
import {openRecoveryMenu} from "./removeButtonSystem.js";


const renderDeletedUsersList = () => {
    const main = document.querySelector(".delIdList")
    const title = document.querySelector(".delIdList__title")
    const deletedList = document.querySelector(".delIdList__list");

    const deletedInfo = getDeletedUsersInfo();


    deletedList.innerHTML = "";
    deletedInfo.forEach((user) => {
        const li = document.createElement("li");
        li.classList.add("delIdList__list__card");
        li.id=user.id
        li.addEventListener("click", () => openRecoveryMenu(user.id))
        li.innerHTML = `
                <img
                class="delIdList__list__card-img"
                src=${user.img}
                alt="robot"
              />
              <div class="delIdList__list__card-body">
                <span class="delIdList__list__card-body-name">${user.name}</span>
                <span class="delIdList__list__card-body-id">Id:${user.id}</span>
              </div>`;
        deletedList.appendChild(li);
    });
    if(deletedList.childElementCount != 0){
        main.style.display="flex"
        title.innerHTML="Удаленные пользователи"
    }else{
        main.style.display="none"
        title.innerHTML=""
    }

};

export default renderDeletedUsersList;
