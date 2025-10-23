const open = document.querySelector(".open-btn");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close-btn");
open.addEventListener("click", () => {
  menu.classList.add("move");
});
close.addEventListener("click", () => {
  menu.classList.remove("move");
});

/* <육각형 그래프> */
const canvas = document.getElementById("profile-skills-content");
const ctx = canvas.getContext("2d");

// 캔버스 중앙
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

const radius = 100; // 육각형 반지름
const sides = 6;
const rotation = (90 * Math.PI) / 180; // 90도 회전

// 데이터 값과 라벨 (줄바꿈 가능)
const data = [0.9, 0.8, 0.9, 0.75, 0.9, 0.85];
const labels = [
  ["MS Office"],
  ["MY SQL"],
  ["WEB Frontend"],
  ["Figma"],
  ["Photoshop"],
  ["Illustrator"],
];

// 육각형 그리는 함수
function drawHexagon(ratio, color, fill = false) {
  ctx.beginPath();
  for (let i = 0; i < sides; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 2 + rotation;
    const x = centerX + Math.cos(angle) * radius * ratio;
    const y = centerY + Math.sin(angle) * radius * ratio;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.strokeStyle = color;
  ctx.stroke();
  if (fill) {
    ctx.fillStyle = color + "33";
    ctx.fill();
  }
}

// 육각형 격자 (단계별)
for (let i = 0.2; i <= 1; i += 0.2) {
  // i가 1일 때만 진한 색, 나머지는 연한 색
  const color = i === 1 ? "rgb(150,57,86)" : "rgb(223, 152, 175)";
  drawHexagon(i, color);
}

// 데이터 영역 + 라벨
ctx.beginPath();
data.forEach((value, i) => {
  const angle = (Math.PI / 3) * i - Math.PI / 2 + rotation;
  const x = centerX + Math.cos(angle) * radius * value;
  const y = centerY + Math.sin(angle) * radius * value;

  if (i === 0) ctx.moveTo(x, y);
  else ctx.lineTo(x, y);

  // 라벨 위치 (거리 고정 + Figma만 조정)
  const lineHeight = 18; // 줄 간격
  labels[i].forEach((line, index) => {
    let labelDistance = radius + 30; // 기본 거리

    // MS Office만 조금 더 멀리
    if (line === "MS Office") {
      labelDistance = radius + 50;
    }

    // Figma만 조금 더 멀리
    if (line === "Figma") {
      labelDistance = radius + 45;
    }

    const labelX = centerX + Math.cos(angle) * labelDistance;
    const labelY =
      centerY + Math.sin(angle) * labelDistance + index * lineHeight;

    ctx.font = "500 16px sans-serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(line, labelX, labelY);
  });
});
ctx.closePath();

// 데이터 영역 채우기
ctx.fillStyle = "rgb(150, 57, 86, 0.4)";
ctx.fill();
ctx.strokeStyle = "rgb(255, 191, 204, 0)";
ctx.stroke();

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
