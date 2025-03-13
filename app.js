const NavEl = document.getElementById("nav");

const btnSec = document.getElementById("button-sec");
btnSec.classList.add("button-sec");

const cancelBtn = document.querySelector("#cancelBtn");
const menuBtn = document.querySelector("#menuBtn");

const mainCon = document.querySelector("#main-con");
mainCon.classList.add("main-con");

menuBtn.addEventListener("click", () => {
  mainCon.style.transform = "rotate(-15deg)";
  btnSec.style.transform = "rotate(-70deg)";
  NavEl.classList.toggle("hide");
});

cancelBtn.addEventListener("click", () => {
  mainCon.style.transform = "rotate(0deg)";
  btnSec.style.transform = "rotate(0deg)";
  NavEl.classList.toggle("hide");
  // NavEl.animate(rightSlide);
});
