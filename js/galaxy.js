console.log("galaxy.js loaded");

window.galaxy = {
  layers: [
    { stars: [], depth: 0.2 }, // far
    { stars: [], depth: 0.5 }, // mid
    { stars: [], depth: 1.0 }  // near
  ]
};

for (const layer of galaxy.layers) {
  for (let i = 0; i < 200; i++) {
    layer.stars.push({
      x: Math.random() * 8000 - 4000,
      y: Math.random() * 8000 - 4000,
      r: Math.random() * 1.5 + 0.3
    });
  }
}
