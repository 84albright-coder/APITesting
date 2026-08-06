const particleLayer = document.createElement('div');
particleLayer.className = 'particle-layer';
document.body.appendChild(particleLayer);

function createParticles() {
  const count = 28;

  for (let index = 0; index < count; index += 1) {
    const particle = document.createElement('span');
    particle.className = index % 2 === 0 ? 'particle heart' : 'particle star';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${6 + Math.random() * 6}s`;
    particle.style.animationDelay = `${Math.random() * 4}s`;
    particleLayer.appendChild(particle);
  }
}

createParticles();

const storySteps = [
  {
    title: 'The first hello',
    text: 'A spark, a smile, and the beginning of something unforgettable.',
  },
  {
    title: 'Shared laughter',
    text: 'Little moments turned into memories that still feel bright whenever you smile.',
  },
  {
    title: 'Growing closer',
    text: 'Every conversation, every glance, and every heartbeat made the love feel deeper.',
  },
  {
    title: 'Forever feeling',
    text: 'And now, six beautiful months later, it feels like forever in the making.',
  },
];

const title = document.getElementById('story-title');
const text = document.getElementById('story-text');
const buttons = document.querySelectorAll('.story-btn');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    const step = storySteps[Number(button.dataset.index)];
    title.textContent = step.title;
    text.textContent = step.text;
  });
});

for (const anchor of document.querySelectorAll('a[href^="#"]')) {
  anchor.addEventListener('click', (event) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));
