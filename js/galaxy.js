const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

// -------------------- CAMERA --------------------
let camera = {
  x: 0,
  y: 0,
  zoom: 1
};

// -------------------- INPUT --------------------
let dragging = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener("mousedown", e => {
  dragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
});

window.addEventListener("mouseup", () => dragging = false);

window.addEventListener("mousemove", e => {
  if (!dragging) return;
  camera.x -= (e.clientX - lastX) / camera.zoom;
  camera.y -= (e.clientY - lastY) / camera.zoom;
  lastX = e.clientX;
  lastY = e.clientY;
});

canvas.addEventListener("wheel", e => {
  const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
  camera.zoom *= zoomFactor;
  camera.zoom = Math.max(0.1, Math.min(10, camera.zoom));
});

// -------------------- GALAXY --------------------
const STAR_COUNT = 6000;
const stars = [];

for (let i = 0; i < STAR_COUNT; i++) {
  stars.push({
    x: (Math.random() - 0.5) * 20000,
    y: (Math.random() - 0.5) * 20000,
    r: Math.random() * 1.5 + 0.3,
    depth: Math.random()
  });
}

// -------------------- DRAW --------------------
function draw() {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.scale(camera.zoom, camera.zoom);
  ctx.translate(-camera.x, -camera.y);

  for (const star of stars) {
    const parallax = 0.2 + star.depth * 0.8;
    ctx.beginPath();
    ctx.arc(
      star.x * parallax,
      star.y * parallax,
      star.r,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = "white";
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();
