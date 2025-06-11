const open = document.querySelector(".open-btn");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close-btn");
open.addEventListener("click", () => {
  menu.classList.add("move");
});
close.addEventListener("click", () => {
  menu.classList.remove("move");
});

// 슬라이더 이미지 배열
const images = [
  "images/포트폴리오-page1.png",
  "images/포트폴리오-page4 최종.png",
  "images/포트폴리오-page6(민정미)-최종.png",
  "images/포트폴리오-page30(WEB).png",
];
let current = 0;

// DOMContentLoaded 이후에 버튼과 이미지 요소를 안전하게 선택
window.addEventListener("DOMContentLoaded", () => {
  const sliderImage = document.getElementById("slider-image");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  function showImage(idx) {
    // 페이드 아웃
    sliderImage.classList.add("fade-out");
    setTimeout(() => {
      sliderImage.src = images[idx];
      // 이미지가 바뀐 후 페이드 인
      sliderImage.classList.remove("fade-out");
      sliderImage.classList.add("fade-in");
      setTimeout(() => {
        sliderImage.classList.remove("fade-in");
      }, 300);
    }, 300);
  }

  leftBtn.addEventListener("click", () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  });

  rightBtn.addEventListener("click", () => {
    current = (current + 1) % images.length;
    showImage(current);
  });

  // 초기 이미지 세팅
  showImage(current);
});
