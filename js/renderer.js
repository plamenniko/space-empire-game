function drawScene() {
  ctx.setTransform(1,0,0,1,0,0);
  ctx.clearRect(0,0,canvas.width,canvas.height);

  applyCamera();

  // BACK → FRONT
  drawGalaxy();

  if (camera.zoom > 0.2) {
    drawSystems();
  }

  if (camera.zoom > 0.4) {
    drawFleets();
  }
}
