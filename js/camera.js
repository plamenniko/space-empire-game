const fleets = [
  { x: 120, y: 0 }
];

function updateFleets() {}

function drawFleets() {
  ctx.fillStyle = "lime";
  fleets.forEach(f => {
    ctx.beginPath();
    ctx.arc(f.x, f.y, 6, 0, Math.PI*2);
    ctx.fill();
  });
}
