console.log("core.js loaded");

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
window.addEventListener("resize", resize);
resize();

function loop() {
  drawScene(ctx);
  requestAnimationFrame(loop);
}

loop();
