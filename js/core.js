// core.js
console.log("core.js loaded");

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw fleet dot
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(
    canvas.width / 2,
    canvas.height / 2,
    4,
    0,
    Math.PI * 2
  );
  ctx.fill();

  requestAnimationFrame(loop);
}

loop();
