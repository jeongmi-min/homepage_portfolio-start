const open = document.querySelector(".open-btn");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close-btn");

open.addEventListener("click", () => menu.classList.add("move"));
close.addEventListener("click", () => menu.classList.remove("move"));

// input placeholder 편집
const inputs = [
  { id: "signup-id", placeholder: "아이디를 입력하세요" },
  { id: "signup-password", placeholder: "비밀번호를 입력하세요" },
  { id: "signup-repassword", placeholder: "한 번 더 비밀번호를 입력하세요" },
  { id: "signup-name", placeholder: "이름을 입력하세요" },
  { id: "signup-email", placeholder: "이메일을 입력하세요" },
  {
    id: "signup-phone",
    placeholder: "전화번호를 입력하세요 (예: 01012345678)",
  },
];

inputs.forEach((inputObj) => {
  const input = document.getElementById(inputObj.id);
  if (!input) return;

  input.addEventListener("focus", () => (input.placeholder = ""));
  input.addEventListener("blur", () => {
    if (!input.value) input.placeholder = inputObj.placeholder;
  });
});

// 기존 회원
const users = [
  { id: "testuser", password: "1234" },
  { id: "user2", password: "abcd" },
  { id: "1234", password: "abcd" },
];

// ID 중복 체크
const signupIdInput = document.getElementById("signup-id");
const confirmIdBtn = document.getElementById("confirm-id-btn");
const idCheckMsg = document.getElementById("id-check-msg");

confirmIdBtn.addEventListener("click", () => {
  const enteredId = signupIdInput.value.trim();

  if (!enteredId) {
    idCheckMsg.textContent = "* 아이디를 입력해주세요.";
    idCheckMsg.style.color = "#b2567a";
    return;
  }

  const isDuplicate = users.some((user) => user.id === enteredId);

  if (isDuplicate) {
    idCheckMsg.textContent = "* 이미 사용 중인 아이디입니다.";
    idCheckMsg.style.color = "#b2567a";
    signupIdInput.focus();
  } else {
    idCheckMsg.textContent = "* 사용 가능한 아이디입니다.";
    idCheckMsg.style.color = "#008000";
  }
});

// 비밀번호 확인
const passwordInput = document.getElementById("signup-password");
const repasswordInput = document.getElementById("signup-repassword");
const confirmBtn = document.getElementById("confirm-password-btn");
const msg = document.getElementById("password-check-msg");

confirmBtn.addEventListener("click", () => {
  const pw = passwordInput.value.trim();
  const repw = repasswordInput.value.trim();

  if (pw === "" || repw === "") {
    msg.textContent = "* 비밀번호를 입력하세요.";
    msg.style.color = "#b2567a";
    return;
  }

  if (pw === repw) {
    msg.textContent = "* 완료";
    msg.style.color = "#008000";
  } else {
    msg.textContent = "비밀번호가 일치하지 않습니다. 다시 입력하세요.";
    msg.style.color = "#b2567a";
    repasswordInput.value = "";
    repasswordInput.focus();
  }
});

// 이메일 검증
const emailInput = document.getElementById("signup-email");
const emailError = document.getElementById("email-error");

emailInput.addEventListener("input", () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.style.display = emailRegex.test(emailInput.value)
    ? "none"
    : "block";
});

// 전화번호 검증
const phoneInput = document.getElementById("signup-phone");
const phoneError = document.getElementById("phone-error");

phoneInput.addEventListener("input", () => {
  const phoneRegex = /^\d{10,11}$/;
  phoneError.style.display = phoneRegex.test(phoneInput.value)
    ? "none"
    : "block";
});

// 회원가입 submit 처리
const form = document.getElementById("signup-form");
const errorMsg = document.getElementById("signup-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const enteredId = signupIdInput.value.trim();
  const enteredPw = passwordInput.value.trim();
  const enteredRePw = repasswordInput.value.trim();
  const name = document.getElementById("signup-name").value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const birth = document.getElementById("signup-birth").value.trim();

  // 필수 입력 체크
  if (
    !enteredId ||
    !enteredPw ||
    !enteredRePw ||
    !name ||
    !email ||
    !phone ||
    !birth
  ) {
    errorMsg.textContent = "* 모든 입력란에 기입해주세요.";
    errorMsg.style.display = "block";
    return;
  }

  // 비밀번호 일치 체크
  if (enteredPw !== enteredRePw) {
    errorMsg.textContent = "* 비밀번호가 일치하지 않습니다.";
    errorMsg.style.display = "block";
    return;
  }

  // ID 중복 체크
  const isDuplicate = users.some((user) => user.id === enteredId);
  if (isDuplicate) {
    errorMsg.textContent = "* 이미 사용 중인 아이디입니다.";
    errorMsg.style.display = "block";
    signupIdInput.focus();
    return;
  }

  // 회원가입 성공 처리
  users.push({ id: enteredId, password: enteredPw });
  errorMsg.style.display = "none";
  alert("회원가입 성공!");
  form.reset();
  idCheckMsg.textContent = "";
  window.location.href = "login.html"; // 로그인 페이지 이동
});

// Reset 버튼 처리
const resetBtn = form.querySelector(".reset-btn");
resetBtn.addEventListener("click", (e) => {
  e.preventDefault();

  form.reset();
  errorMsg.style.display = "none";
  idCheckMsg.textContent = "";
  msg.textContent = "";
  emailError.style.display = "none";
  phoneError.style.display = "none";

  // placeholder 초기화
  inputs.forEach((inputObj) => {
    const input = document.getElementById(inputObj.id);
    if (input) input.placeholder = inputObj.placeholder;
  });
});

// DOM이 다 로드된 후 실행
document.addEventListener("DOMContentLoaded", () => {
  const loggedInUser = localStorage.getItem("loggedInUser");

  if (!loggedInUser) {
    // 메뉴 클릭 제한
    const menuLinks = document.querySelectorAll(
      ".menu-a, .menu-click, .footer-menu-a"
    );
    menuLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        alert("로그인 후 이용 가능합니다.");
      });
    });
  }
});
