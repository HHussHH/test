
const modalWindow = document.querySelector(".modalWindow");
const body = document.querySelector("body");
const modalWindowContent = document.querySelector(".modalWindow__content");
const modalWindowCloseBtn = document.querySelector(
  ".modalWindow__content__header-close"
);

const btns = document.querySelectorAll(".modalWindow__content-btn")
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

export const openModalWindow = (todo) => {
  modalWindow.classList.remove("display-none");
  switch (todo){
    case "deletion":{
      btns[0].style.display = "block"
      btns[1].style.display = "none"
      break;
    }
    case "recovery":{
      btns[0].style.display = "none"
      btns[1].style.display = "block"
      break;
    }
  }
};
export const closeModalWindow = () => {
  modalWindow.classList.add("display-none");
};
