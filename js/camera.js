console.log("camera.js loaded");

const camera = {
  x: 0,
  y: 0,
  zoom: 1,

  screenToWorld(px, py) {
    return {
      x: (px - innerWidth / 2) / this.zoom + this.x,
      y: (py - innerHeight / 2) / this.zoom + this.y
    };
  },

  worldToScreen(wx, wy) {
    return {
      x: (wx - this.x) * this.zoom + innerWidth / 2,
      y: (wy - this.y) * this.zoom + innerHeight / 2
    };
  }
};

window.addEventListener("wheel", e => {
  const factor = e.deltaY > 0 ? 0.9 : 1.1;
  camera.zoom *= factor;
  camera.zoom = Math.max(0.02, Math.min(5, camera.zoom));
});
