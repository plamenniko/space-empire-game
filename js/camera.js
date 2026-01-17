console.log("camera.js loaded");

window.camera = {
  x: 0,
  y: 0,
  zoom: 1
};

let dragging = false;
let lastX = 0;
let lastY = 0;

window.addEventListener("mousedown", e => {
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

window.addEventListener("wheel", e => {
  camera.zoom *= e.deltaY < 0 ? 1.1 : 0.9;
  camera.zoom = Math.max(0.1, Math.min(5, camera.zoom));
});
