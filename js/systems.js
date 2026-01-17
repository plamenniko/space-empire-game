console.log("systems.js loaded");

const systems = [
  { x: 0, y: 0, r: 40 },
  { x: 600, y: -300, r: 30 }
];

function drawSystems(ctx) {
  ctx.fillStyle = "yellow";
  for (const s of systems) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  }
}
