import renderList from "./renderList.js";

const confirmDeleteButton = document.querySelector("#confirmDeleteButton");
import {openModalWindow, closeModalWindow} from "./modalWindow.js";
import deleteUser from "./deleteUser.js";
import {getSelectedId, getUsersList, setSelectedId} from "./usersData.js";
import {updateUserCount} from "./paginationSystem.js";
import {openRecoveryMenu} from "./removeButtonSystem.js";

const deleteElement = async (id) => {
    await deleteUser(+id);
    renderList();
    updateUserCount(getUsersList().length);
};

export const openDeleteMenu = (id) => {
    setSelectedId(id);
    openModalWindow("deletion");
}

function handleConfirmDelete() {
    deleteElement(getSelectedId());
    closeModalWindow();
}

confirmDeleteButton.addEventListener("click", handleConfirmDelete);



