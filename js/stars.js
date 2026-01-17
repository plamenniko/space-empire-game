const stars = [];

const STAR_COUNT = 9000;
const ARMS = 4;

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

