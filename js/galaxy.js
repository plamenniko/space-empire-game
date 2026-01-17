console.log("galaxy.js loaded");

// World-space galaxy stars (HUGE area)
const galaxyStars = Array.from({ length: 3000 }, () => ({
  x: (Math.random() - 0.5) * 200000,
  y: (Math.random() - 0.5) * 200000,
  r: Math.random() * 1.2 + 0.3
}));

function drawGalaxy(ctx) {
  ctx.fillStyle = "white";
  for (const s of galaxyStars) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  }
}
