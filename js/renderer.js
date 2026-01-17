console.log("renderer.js loaded");

function drawScene(ctx) {
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  // Layer 1: background (no camera)
  drawGalaxy(ctx);

  // Layer 2: world objects (camera space)
  ctx.save();
  ctx.translate(innerWidth / 2, innerHeight / 2);
  ctx.scale(camera.zoom, camera.zoom);
  ctx.translate(-camera.x, -camera.y);

  drawSystems(ctx);
  drawFleets(ctx);

  ctx.restore();
}
