console.log("renderer.js loaded");

window.render = function () {
  const ctx = window.ctx;

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  for (const fleet of window.fleets) {
    ctx.beginPath();
    ctx.arc(fleet.x, fleet.y, 4, 0, Math.PI * 2);
    ctx.fill();
  }
};
