import renderList from "./renderList.js";

const confirmRecoveryButton = document.querySelector("#confirmRecoveryButton");
import {openModalWindow, closeModalWindow} from "./modalWindow.js";
import deleteUser from "./deleteUser.js";
import {
    createNewDeletedId, createNewDeletedUsersInfo, filteredUsersList,
    getDeletedId,
    getDeletedUsersInfo, getInitialData,
    getSelectedId,
    getUsersList,
    setSelectedId, setUsersList
} from "./usersData.js";
import {updateUserCount} from "./paginationSystem.js";
import renderDeletedUsersList from "./renderDeletedUsersList.js";

const deletedUserList = document.querySelector(".delIdList__list");

const removeUsersToList = () =>{
    const selectedId = getSelectedId()
    const deletedArr = getDeletedId()
    const newDeletedArr = deletedArr.filter(id => id !== selectedId)
    createNewDeletedId(newDeletedArr)

    const deletedUserList = getDeletedUsersInfo()
    const newDeletedUserList = deletedUserList.filter(user => newDeletedArr.includes(user.id))
    createNewDeletedUsersInfo(newDeletedUserList)

    renderDeletedUsersList()
    filteredUsersList(getInitialData())
    renderList()
}
export const openRecoveryMenu = (id) =>{
    openModalWindow("recovery");
    setSelectedId(id);
}
function handleConfirmRemove() {
    removeUsersToList()
    closeModalWindow();
}
confirmRecoveryButton.addEventListener("click", handleConfirmRemove);



