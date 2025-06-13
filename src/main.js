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

  function getMarketingSlideWidth() {
    return (
      marketingSlides[0].offsetWidth +
      parseInt(getComputedStyle(marketingSlides[0]).marginRight || 0)
    );
  }

  function updateMarketingSlider() {
    const slideWidth = getMarketingSlideWidth();
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

  // 브랜딩 슬라이더
  const brandingInner = document.querySelector(".branding-slider-inner");
  const brandingSlides = document.querySelectorAll(".branding-slide");
  const brandingLeftBtn = document.querySelector(".branding-left-btn");
  const brandingRightBtn = document.querySelector(".branding-right-btn");
  let brandingCurrent = 0;
  const brandingTotal = brandingSlides.length;

  function getBrandingSlideWidth() {
    return (
      brandingSlides[0].offsetWidth +
      parseInt(getComputedStyle(brandingSlides[0]).marginRight || 0)
    );
  }

  function updateBrandingSlider() {
    const slideWidth = getBrandingSlideWidth();
    const gap = 2;
    const moveAmout = (slideWidth + gap) * brandingCurrent;
    brandingInner.style.transform = `translateX(-${moveAmout}px)`;
  }

  brandingLeftBtn.addEventListener("click", () => {
    brandingCurrent = (brandingCurrent - 1 + brandingTotal) % brandingTotal;
    updateBrandingSlider();
  });

  brandingRightBtn.addEventListener("click", () => {
    brandingCurrent = (brandingCurrent + 1) % brandingTotal;
    updateBrandingSlider();
  });

  updateBrandingSlider();

  // 웹 슬라이더
  const webInner = document.querySelector(".web-slider-inner");
  const webSlides = document.querySelectorAll(".web-slide");
  const webLeftBtn = document.querySelector(".web-left-btn");
  const webRightBtn = document.querySelector(".web-right-btn");
  let webCurrent = 0;
  const webTotal = webSlides.length;

  function getWebSlideWidth() {
    return (
      webSlides[0].offsetWidth +
      parseInt(getComputedStyle(webSlides[0]).marginRight || 0)
    );
  }

  function updateWebSlider() {
    const slideWidth = getWebSlideWidth();
    webInner.style.transform = `translateX(-${webCurrent * slideWidth}px)`;
  }

  webLeftBtn.addEventListener("click", () => {
    webCurrent = (webCurrent - 1 + webTotal) % webTotal;
    updateWebSlider();
  });

  webRightBtn.addEventListener("click", () => {
    webCurrent = (webCurrent + 1) % webTotal;
    updateWebSlider();
  });

  updateWebSlider();
});
