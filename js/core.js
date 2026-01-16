// core.js
console.log("core.js loaded");

const canvas = document.getElementById("game");

if (!canvas) {
  console.error("Canvas NOT found");
}

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function loop() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // TEST DOT (CENTER)
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI * 2);
  ctx.fill();

  requestAnimationFrame(loop);
}

loop();
