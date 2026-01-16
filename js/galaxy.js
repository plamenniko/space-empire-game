const galaxyStars = [];

for (let i = 0; i < 2000; i++) {
  galaxyStars.push({
    x: Math.random() * 200000 - 100000,
    y: Math.random() * 200000 - 100000,
    r: Math.random() * 1.5 + 0.5
  });
}

function drawGalaxy() {
  ctx.fillStyle = "white";
  galaxyStars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
    ctx.fill();
  });
}
