console.log("galaxy.js loaded");

const galaxyStars = Array.from({ length: 1200 }, () => ({
  x: Math.random() * innerWidth,
  y: Math.random() * innerHeight,
  r: Math.random() * 1.5
}));

function drawGalaxy(ctx) {
  ctx.fillStyle = "white";
  for (const s of galaxyStars) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  }
}
