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

function scrollMarketingTo(index) {
  marketingCurrent = (index + marketingTotal) % marketingTotal; // 순환
  marketingSlides[marketingCurrent].scrollIntoView({
    behavior: "smooth",
    inline: "start",
    block: "nearest",
  });
}

marketingLeftBtn.addEventListener("click", () => {
  scrollMarketingTo(marketingCurrent - 1);
});

marketingRightBtn.addEventListener("click", () => {
  scrollMarketingTo(marketingCurrent + 1);
});


  // 브랜딩 슬라이더
const brandingInner = document.querySelector(".branding-slider-inner");
const brandingSlides = document.querySelectorAll(".branding-slide");
const brandingLeftBtn = document.querySelector(".branding-left-btn");
const brandingRightBtn = document.querySelector(".branding-right-btn");

let brandingCurrent = 0; // 현재 슬라이드 인덱스
const brandingTotal = brandingSlides.length;

// 지정한 인덱스 슬라이드로 이동 (순환)
function scrollBrandingTo(index) {
  brandingCurrent = (index + brandingTotal) % brandingTotal; // 순환
  brandingSlides[brandingCurrent].scrollIntoView({
    behavior: "smooth",
    inline: "start",
    block: "nearest",
  });
}

// 버튼 이벤트
brandingLeftBtn.addEventListener("click", () => {
  scrollBrandingTo(brandingCurrent - 1);
});

brandingRightBtn.addEventListener("click", () => {
  scrollBrandingTo(brandingCurrent + 1);
});


// --- 웹 슬라이더 ---
const webInner = document.querySelector(".web-slider-inner");
const webSlides = Array.from(document.querySelectorAll(".web-slide"));
const webLeftBtn = document.querySelector(".web-left-btn");
const webRightBtn = document.querySelector(".web-right-btn");

let webCurrent = 0;
const webTotal = webSlides.length;

function scrollToSlide(index) {
  webCurrent = (index + webTotal) % webTotal;
  webSlides[webCurrent].scrollIntoView({
    behavior: "smooth",
    inline: "start",
    block: "nearest",
  });
}

webLeftBtn.addEventListener("click", () => {
  scrollToSlide(webCurrent - 1);
});

webRightBtn.addEventListener("click", () => {
  scrollToSlide(webCurrent + 1);
});
});

// <desktop>

const desktopOpen = document.querySelector(".desktop-open-btn");
const desktopMenu = document.querySelector(".desktop-menu");
const desktopClose = document.querySelector(".desktop-close-btn");
desktopOpen.addEventListener("click", () => {
  desktopMenu.classList.add("move");
});
desktopClose.addEventListener("click", () => {
  desktopMenu.classList.remove("move");
});

const slideContainer = document.getElementById("slide-container");

const firstBt = document.getElementById("first-button");
const secondBt = document.getElementById("second-button");
const thirdBt = document.getElementById("third-button");
const fourthBt = document.getElementById("fourth-button");

const desktopFooter = document.getElementById("desktop-footer");

firstBt.addEventListener("click", () => {
  slideContainer.style.transform = "translateY(0)";
});

secondBt.addEventListener("click", () => {
  moveToSlide(1);
});

thirdBt.addEventListener("click", () => {
  moveToSlide(2);
});

fourthBt.addEventListener("click", () => {
  moveToSlide(3);
});

let desktopCurrent = 0;
let totalSlides = 4;

function moveToSlide(index) {
  desktopCurrent = index;
  slideContainer.style.transform = `translateY(-${desktopCurrent * 100}vh)`;

  if (desktopCurrent === totalSlides - 1) {
    desktopFooter.style.display = "block";
  } else {
    desktopFooter.style.display = "none";
  }
}

window.addEventListener("wheel", function (e) {
  if (e.deltaY > 0 && desktopCurrent < 3) {
    moveToSlide(desktopCurrent + 1);
  } else if (e.deltaY < 0 && desktopCurrent > 0) {
    moveToSlide(desktopCurrent - 1);
  }
});

window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowDown" && desktopCurrent < 3) {
    moveToSlide(desktopCurrent + 1);
  } else if (e.key === "ArrowUp" && desktopCurrent > 0) {
    moveToSlide(current - 1);
  }
});
