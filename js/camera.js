const camera = {
  x: 0,
  y: 0,
  zoom: 1,
};

let dragging = false;
let last = { x: 0, y: 0 };

canvas.addEventListener("mousedown", e => {
  dragging = true;
  last.x = e.clientX;
  last.y = e.clientY;
});

canvas.addEventListener("mouseup", () => dragging = false);

canvas.addEventListener("mousemove", e => {
  if (!dragging) return;
  camera.x -= (e.clientX - last.x) / camera.zoom;
  camera.y -= (e.clientY - last.y) / camera.zoom;
  last.x = e.clientX;
  last.y = e.clientY;
});

canvas.addEventListener("wheel", e => {
  camera.zoom *= e.deltaY > 0 ? 0.9 : 1.1;
  camera.zoom = Math.max(0.02, Math.min(5, camera.zoom));
});

function applyCamera() {
  ctx.setTransform(1,0,0,1,0,0);
  ctx.translate(canvas.width/2, canvas.height/2);
  ctx.scale(camera.zoom, camera.zoom);
  ctx.translate(-camera.x, -camera.y);
}

function updateCamera() {}
