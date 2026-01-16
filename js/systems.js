const starSystems = [
  {
    x: 0,
    y: 0,
    sunRadius: 80,
    orbits: [150, 260, 380]
  }
];

function drawSystems() {
  starSystems.forEach(sys => {
    // Sun
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(sys.x, sys.y, sys.sunRadius, 0, Math.PI*2);
    ctx.fill();

    // Orbits
    ctx.strokeStyle = "rgba(255,255,255,0.2)";
    sys.orbits.forEach(r => {
      ctx.beginPath();
      ctx.arc(sys.x, sys.y, r, 0, Math.PI*2);
      ctx.stroke();
    });
  });
}
