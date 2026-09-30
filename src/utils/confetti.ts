import confetti from 'canvas-confetti';

export function fireSubtleConfetti() {
  confetti({
    particleCount: 45,
    spread: 60,
    origin: { y: 0.75 },
    colors: ['#E6C280', '#C85250', '#F9EBEF', '#FAF8F5'],
    ticks: 200,
    gravity: 0.8,
    scalar: 0.9,
    shapes: ['circle', 'square'],
  });
}

export function fireMilestoneBurst() {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    colors: ['#E6C280', '#C85250', '#D4AF37', '#FAF8F5', '#F2D3DC'],
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}
