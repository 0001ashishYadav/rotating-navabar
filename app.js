const cancelBtn = document.querySelector("#cancelBtn");
const menuBtn = document.querySelector("#menuBtn");

const mainCon = document.querySelector("#main-con");
mainCon.classList.add("main-con");

menuBtn.addEventListener("click", () => {
  mainCon.style.transform = "rotate(-20deg)";
});

cancelBtn.addEventListener("click", () => {});
