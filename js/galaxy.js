function drawStars() {
  for (const s of stars) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgb(${s.b},${s.b},255)`;
    ctx.fill();
  }
}

function loop() {
  beginRender();
  drawStars();
  requestAnimationFrame(loop);
}

loop();
