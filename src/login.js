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

/* <로그인 에러 문구> */
const users = [
  { id: "testuser", password: "1234" },
  { id: "user2", password: "abcd" },
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
    // 계정이 존재하면 로그인 처리 (여기서는 예시로 alert)
    errorMsg.style.display = "none";
    alert("로그인 성공!");
    // 실제 서버 연결 시 여기서 페이지 이동 또는 토큰 발급 처리
  }
});
