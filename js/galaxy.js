const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

/* CAMERA */
let camX = 0, camY = 0, zoom = 1;

/* INPUT */
let drag = false, lx = 0, ly = 0;

canvas.onmousedown = e => {
  drag = true;
  lx = e.clientX;
  ly = e.clientY;
};
window.onmouseup = () => drag = false;
window.onmousemove = e => {
  if (!drag) return;
  camX -= (e.clientX - lx) / zoom;
  camY -= (e.clientY - ly) / zoom;
  lx = e.clientX;
  ly = e.clientY;
};
canvas.onwheel = e => {
  zoom *= e.deltaY > 0 ? 0.9 : 1.1;
  zoom = Math.max(0.05, Math.min(20, zoom));
};

/* STARS */
const stars = [];
const COUNT = 12000;
const ARMS = 4;

for (let i = 0; i < COUNT; i++) {
  const arm = Math.floor(Math.random() * ARMS);
  const angle = arm / ARMS * Math.PI * 2 + Math.random() * 0.5;
  const dist = Math.pow(Math.random(), 0.6) * 8000;
  const spin = dist * 0.002;
  const a = angle + spin;

  stars.push({
    x: Math.cos(a) * dist + (Math.random() - 0.5) * 200,
    y: Math.sin(a) * dist + (Math.random() - 0.5) * 200,
    r: Math.random() * 1.5 + 0.3,
    c: 180 + Math.random() * 75
  });
}

/* LOOP */
function loop() {
  ctx.setTransform(1,0,0,1,0,0);
  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.translate(canvas.width/2, canvas.height/2);
  ctx.scale(zoom, zoom);
  ctx.translate(-camX, -camY);

  for (const s of stars) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgb(${s.c},${s.c},255)`;
    ctx.fill();
  }

  requestAnimationFrame(loop);
}

loop();
