const open = document.querySelector(".open-btn");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close-btn");
open.addEventListener("click", () => {
  menu.classList.add("move");
});
close.addEventListener("click", () => {
  menu.classList.remove("move");
});

// 더보기/숨기기 버튼
const toggleButton = document.getElementById("toggle-button");
const contentTwo = document.getElementById("web-content-box-two");

toggleButton.addEventListener("click", () => {
  contentTwo.classList.toggle("hidden");

  // 버튼 텍스트 토글
  if (contentTwo.classList.contains("hidden")) {
    toggleButton.textContent = "더보기";
  } else {
    toggleButton.textContent = "접기";
  }
});
