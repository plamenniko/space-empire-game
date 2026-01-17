console.log("renderer.js loaded");

window.render = function (ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.save();
  ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);

  for (const layer of galaxy.layers) {
    ctx.save();
    ctx.scale(camera.zoom * layer.depth, camera.zoom * layer.depth);
    ctx.translate(-camera.x, -camera.y);

    ctx.fillStyle = "white";
    for (const s of layer.stars) {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  ctx.restore();
};
