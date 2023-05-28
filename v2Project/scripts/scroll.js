const checkCurrentPosition = () => {
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  let mainHeight = main.firstElementChild.offsetTop;
  if (window.scrollY > mainHeight) {
    header.classList.add("header__fixed");
  } else {
    header.classList.remove("header__fixed");
  }
};

export default checkCurrentPosition;
