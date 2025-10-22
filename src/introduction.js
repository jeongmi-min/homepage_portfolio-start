const open = document.querySelector(".open-btn");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close-btn");
open.addEventListener("click", () => {
  menu.classList.add("move");
});
close.addEventListener("click", () => {
  menu.classList.remove("move");
});

const canvas = document.getElementById("profile-skills-content");
const ctx = canvas.getContext("2d");
const centerX = 150;
const centerY = 150;
const radius = 100;
const sides = 6;
const data = [0.9, 0.6, 0.9, 0.5, 0.7, 0.4]; // 각 꼭짓점 데이터 (0~1)

function drawHexagon(ratio, color, fill = false) {
  ctx.beginPath();
  for (let i = 0; i < sides; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
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
  drawHexagon(i, "#ccc");
}

// 데이터 영역
ctx.beginPath();
data.forEach((value, i) => {
  const angle = (Math.PI / 3) * i - Math.PI / 2;
  const x = centerX + Math.cos(angle) * radius * value;
  const y = centerY + Math.sin(angle) * radius * value;
  if (i === 0) ctx.moveTo(x, y);
  else ctx.lineTo(x, y);
});
ctx.closePath();
ctx.fillStyle = "rgba(248, 147, 226, 0.4)";
ctx.fill();
ctx.strokeStyle = "rgba(235, 75, 200, 0.4)";
ctx.stroke();
