console.log("core.js loaded");

const canvas = document.getElementById("game");
window.canvas = canvas;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.ctx = canvas.getContext("2d");

function loop() {
  render();
  requestAnimationFrame(loop);
}

loop();
