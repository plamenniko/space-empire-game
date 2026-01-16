console.log("renderer.js loaded");

let ctx = null;

/**
 * Initialize renderer with canvas context
 */
function initRenderer(canvas) {
  ctx = canvas.getContext("2d");
}

/**
 * Draw background stars (SCREEN SPACE – NO CAMERA, NO ZOOM)
 */
function drawBackgroundStars(width, height) {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "white";

  for (let i = 0; i < 300; i++) {
    const x = (i * 73) % width;
    const y = (i * 151) % height;
    ctx.fillRect(x, y, 1, 1);
  }
}

/**
 * Draw world objects (CAMERA SPACE – ZOOM AFFECTS THESE)
 */
function drawWorld(camera, drawFn) {
  ctx.save();
  ctx.translate(camera.screenCenterX, camera.screenCenterY);
  ctx.scale(camera.zoom, camera.zoom);
  ctx.translate(-camera.x, -camera.y);

  drawFn(ctx);

  ctx.restore();
}

/**
 * Main draw entry
 */
function drawScene(camera, systems, fleets) {
  const canvas = ctx.canvas;

  // 1️⃣ Background (NO ZOOM)
  drawBackgroundStars(canvas.width, canvas.height);

  // 2️⃣ Galaxy + Fleets (ZOOMED)
  drawWorld(camera, (ctx) => {
    // Draw star systems
    systems.forEach(sys => {
      ctx.fillStyle = "yellow";
      ctx.beginPath();
      ctx.arc(sys.x, sys.y, 10, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw fleets (clamped size)
    fleets.forEach(fleet => {
      ctx.fillStyle = "lime";
      ctx.beginPath();
      ctx.arc(fleet.x, fleet.y, 3, 0, Math.PI * 2);
      ctx.fill();
    });
  });
}
