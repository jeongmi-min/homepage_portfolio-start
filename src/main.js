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

  // 마케팅 슬라이더
  const marketingInner = document.querySelector(".marketing-slider-inner");
  const marketingSlides = document.querySelectorAll(".marketing-slide");
  const marketingLeftBtn = document.querySelector(".marketing-left-btn");
  const marketingRightBtn = document.querySelector(".marketing-right-btn");
  let marketingCurrent = 0;
  const marketingTotal = marketingSlides.length;

  // 각 slide의 실제 width를 구함 (padding, margin 포함)
  function getSlideWidth() {
    return (
      marketingSlides[0].offsetWidth +
      parseInt(getComputedStyle(marketingSlides[0]).marginRight || 0)
    );
  }

  function updateMarketingSlider() {
    const slideWidth = getSlideWidth();
    marketingInner.style.transform = `translateX(-${
      marketingCurrent * slideWidth
    }px)`;
  }

  marketingLeftBtn.addEventListener("click", () => {
    marketingCurrent = (marketingCurrent - 1 + marketingTotal) % marketingTotal;
    updateMarketingSlider();
  });

  marketingRightBtn.addEventListener("click", () => {
    marketingCurrent = (marketingCurrent + 1) % marketingTotal;
    updateMarketingSlider();
  });

  updateMarketingSlider();
});
