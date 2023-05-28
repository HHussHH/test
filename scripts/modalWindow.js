const modalWindow = document.querySelector(".modalWindow");
const modalWindowContent = document.querySelector(".modalWindow__content");
const modalWindowCloseBtn = document.querySelector(
  ".modalWindow__content__header-close"
);

//обработчик остановки всплытия
modalWindowContent.addEventListener("click", function (event) {
  event.stopPropagation();
});
//обработчик закрытия модального окна при клике на область  снаружи контента
modalWindow.addEventListener("click", function () {
  modalWindow.classList.add("display-none");
});

//обработчик закрытия модального окна при клике на крестик
modalWindowCloseBtn.addEventListener("click", function () {
  modalWindow.classList.add("display-none");
});

export const openModalWindow = () => {
  document.body.classList.add("of-hidden");
  modalWindow.classList.remove("display-none");
};
export const closeModalWindow = () => {
  document.body.classList.remove("of-hidden");
  modalWindow.classList.add("display-none");
};
