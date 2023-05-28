import renderList from "./renderList.js";
const confirmDeleteButton = document.querySelector("#confirmDeleteButton");
import { openModalWindow, closeModalWindow } from "./modalWindow.js";
import deleteUser from "./deleteUser.js";
// import { getUsersList } from "./usersData.js";
// import { updateUserCount } from "./paginationSystem.js";

const deleteElement = async (id) => {
  await deleteUser(+id);
  renderList();
};

const userList = document.querySelector(".userList");

//Обработка кнопки удаления пользователя
export const deleteButtonHandler = () => {
  userList.addEventListener("click", function (event) {
    const deleteBtn = event.target.closest(".userList__user__btn");
    if (deleteBtn) {
      const id = deleteBtn.id;
      openModalWindow();
      document.body.classList.add("of-hidden");
      // Именованная функция для обработчика события
      function handleConfirmDelete() {
        deleteElement(id);
        closeModalWindow();
        document.body.classList.remove("of-hidden");
        // Удаляем обработчик события после выполнения
        confirmDeleteButton.removeEventListener("click", handleConfirmDelete);
      }

      confirmDeleteButton.addEventListener("click", handleConfirmDelete);
    }
  });
};
