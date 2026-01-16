console.log("galaxy.js loaded");

window.galaxy = {
  stars: []
};

// create background stars
for (let i = 0; i < 200; i++) {
  galaxy.stars.push({
    x: Math.random() * 4000 - 2000,
    y: Math.random() * 4000 - 2000,
    r: Math.random() * 1.5 + 0.5
  });
}
