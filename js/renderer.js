console.log("renderer.js loaded");

function drawScene(ctx) {
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  // ===== GALAXY PARALLAX LAYER =====
  ctx.save();
  ctx.translate(innerWidth / 2, innerHeight / 2);

  // VERY WEAK ZOOM (parallax)
  const galaxyZoom = camera.zoom * 0.15;

  ctx.scale(galaxyZoom, galaxyZoom);
  ctx.translate(-camera.x, -camera.y);

  drawGalaxy(ctx);
  ctx.restore();

  // ===== MAIN WORLD LAYER =====
  ctx.save();
  ctx.translate(innerWidth / 2, innerHeight / 2);
  ctx.scale(camera.zoom, camera.zoom);
  ctx.translate(-camera.x, -camera.y);

  drawSystems(ctx);
  drawFleets(ctx);

  ctx.restore();
}
