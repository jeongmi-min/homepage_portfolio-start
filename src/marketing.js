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
const contentTwo = document.getElementById("marketing-content-box-two");

toggleButton.addEventListener("click", () => {
  contentTwo.classList.toggle("hidden");

  // 버튼 텍스트 토글
  if (contentTwo.classList.contains("hidden")) {
    toggleButton.textContent = "더보기";
  } else {
    toggleButton.textContent = "접기";
  }
});
// 로그인 시
document.addEventListener("DOMContentLoaded", function () {
  const buttons = {
    menubarButton: document.getElementById("menubar-button"),
    footerLogin: document.querySelector(".footer-menu-a[href='login.html']"),
  };

  const loggedInUser = localStorage.getItem("loggedInUser");

  function setLogoutBehavior(button, useUserName = false) {
    if (!button) return;

    // 텍스트 설정
    button.textContent = useUserName ? loggedInUser : "Logout";
    button.href = "#"; // a 기본 링크 막기

    button.onclick = function (event) {
      event.preventDefault(); // 기본 동작 막기

      const confirmed = confirm("로그아웃 하시겠습니까?");
      if (!confirmed) return; // ❌ 취소 시 아무 일 없음

      localStorage.removeItem("loggedInUser");
      restoreAllButtons();
    };
  }

  function restoreAllButtons() {
    Object.values(buttons).forEach((btn) => {
      if (!btn) return;

      btn.textContent = "Login";
      btn.href = "login.html";
      btn.onclick = () => (window.location.href = "login.html");
    });
  }

  if (loggedInUser) {
    setLogoutBehavior(buttons.menubarButton, true);
    setLogoutBehavior(buttons.footerLogin, false);
  } else {
    restoreAllButtons();
  }
});
