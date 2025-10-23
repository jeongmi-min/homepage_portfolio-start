const open = document.querySelector(".open-btn");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close-btn");
open.addEventListener("click", () => {
  menu.classList.add("move");
});
close.addEventListener("click", () => {
  menu.classList.remove("move");
});

// input 태그 편집
const loginIdInput = document.getElementById("login-id");

loginIdInput.addEventListener("focus", function () {
  this.placeholder = "";
});

loginIdInput.addEventListener("blur", function () {
  if (!this.value) this.placeholder = "아이디를 입력하세요";
});

const loginPasswordInput = document.getElementById("login-password");
loginPasswordInput.addEventListener("focus", function () {
  this.placeholder = "";
});
loginPasswordInput.addEventListener("blur", function () {
  if (!this.value) this.placeholder = "비밀번호를 입력하세요";
});

/* <error message> */
const users = [
  { id: "testuser", password: "1234" },
  { id: "user2", password: "abcd" },
  { id: "1234", password: "abcd" },
];

const form = document.getElementById("login-form");
const errorMsg = document.getElementById("login-error");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // 페이지 새로고침 방지

  const loginId = document.getElementById("login-id").value.trim();
  const loginPassword = document.getElementById("login-password").value.trim();

  // 회원 존재 확인
  const userExists = users.find(
    (user) => user.id === loginId && user.password === loginPassword
  );

  if (!userExists) {
    // 계정이 없으면 메시지 표시
    errorMsg.style.display = "block";
  } else {
    // 계정이 존재하면 로그인 처리
    errorMsg.style.display = "none";

    // localStorage에 로그인 정보 저장
    localStorage.setItem("loggedInUser", loginId);

    // 확인 후 index.html로 이동
    if (confirm("로그인 성공! 확인을 누르면 메인 페이지로 이동합니다.")) {
      window.location.href = "index.html";
    }
  }
});

//로그아웃 상태일 시 접근 제한
document.addEventListener("DOMContentLoaded", function () {
  const loggedInUser = localStorage.getItem("loggedInUser");

  // 접근 제한할 링크 (헤더 + 섹션)
  const restrictedLinks = document.querySelectorAll(
    ".headerbar-menu .menu-a[href='introduction.html'], \
     .headerbar-menu .menu-a[href='marketing.html'], \
     .headerbar-menu .menu-a[href='branding.html'], \
     .headerbar-menu .menu-a[href='web.html'], \
     .menu-link[href='introduction.html'], \
     .menu-link[href='marketing.html'], \
     .menu-link[href='branding.html'], \
     .menu-link[href='web.html'], \
     .footer-menu-a[href='introduction.html'], \
     .footer-menu-a[href='marketing.html'], \
     .footer-menu-a[href='branding.html'], \
     .footer-menu-a[href='web.html']"
  );

  restrictedLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (!loggedInUser) {
        e.preventDefault(); // 링크 이동 막기
        alert("로그인해야 접근할 수 있습니다.");
        // window.location.href = "login.html"; // 원하면 로그인 페이지로 이동
      }
    });
  });
});
