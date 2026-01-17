console.log("fleets.js loaded");

const fleets = [
  { x: 100, y: 50 },
  { x: -200, y: 120 }
];

function drawFleets(ctx) {
  ctx.fillStyle = "cyan";
  for (const f of fleets) {
    ctx.beginPath();
    ctx.arc(f.x, f.y, 4, 0, Math.PI * 2);
    ctx.fill();
  }
}
