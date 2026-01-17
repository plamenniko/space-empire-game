const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

// ---------------- CAMERA ----------------
const camera = { x: 0, y: 0, zoom: 1 };

// ---------------- INPUT ----------------
let dragging = false;
let lx = 0, ly = 0;

canvas.addEventListener("mousedown", e => {
  dragging = true;
  lx = e.clientX;
  ly = e.clientY;
});
window.addEventListener("mouseup", () => dragging = false);
window.addEventListener("mousemove", e => {
  if (!dragging) return;
  camera.x -= (e.clientX - lx) / camera.zoom;
  camera.y -= (e.clientY - ly) / camera.zoom;
  lx = e.clientX;
  ly = e.clientY;
});
canvas.addEventListener("wheel", e => {
  camera.zoom *= e.deltaY > 0 ? 0.9 : 1.1;
  camera.zoom = Math.max(0.05, Math.min(20, camera.zoom));
});

// ---------------- GALAXY ----------------
const STAR_COUNT = 9000;
const ARMS = 4;
const stars = [];

for (let i = 0; i < STAR_COUNT; i++) {
  const arm = Math.floor(Math.random() * ARMS);
  const angle = (arm / ARMS) * Math.PI * 2 + Math.random() * 0.6;
  const dist = Math.pow(Math.random(), 0.6) * 6000;

  const spin = dist * 0.002;
  const a = angle + spin;

  stars.push({
    x: Math.cos(a) * dist + (Math.random() - 0.5) * 120,
    y: Math.sin(a) * dist + (Math.random() - 0.5) * 120,
    r: Math.random() * 1.4 + 0.3,
    b: 200 + Math.random() * 55
  });
}

// ---------------- DRAW ----------------
function draw() {
  ctx.setTransform(1,0,0,1,0,0);
  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.translate(canvas.width/2, canvas.height/2);
  ctx.scale(camera.zoom, camera.zoom);
  ctx.translate(-camera.x, -camera.y);

  for (const s of stars) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgb(${s.b},${s.b},255)`;
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();
