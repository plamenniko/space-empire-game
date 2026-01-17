const camera = {
  x: 0,
  y: 0,
  zoom: 1
};

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
  e.preventDefault();
  camera.zoom *= e.deltaY > 0 ? 0.9 : 1.1;
  camera.zoom = Math.max(0.05, Math.min(20, camera.zoom));
}, { passive: false });

