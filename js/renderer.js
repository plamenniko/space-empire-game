console.log("renderer.js loaded");

window.render = function (ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.save();
  ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
  ctx.scale(camera.zoom, camera.zoom);
  ctx.translate(-camera.x, -camera.y);

  // stars
  ctx.fillStyle = "white";
  for (const s of galaxy.stars) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  }

  // systems
  ctx.fillStyle = "yellow";
  for (const sys of systems) {
    ctx.beginPath();
    ctx.arc(sys.x, sys.y, sys.r, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
};
