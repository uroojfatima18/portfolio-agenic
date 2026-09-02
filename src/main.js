import './style.css'

// Morphing Text Logic
const morphText = document.getElementById('morph-text');
const phrases = ["AI Agents", "AI Automation"];
let index = 0;

if (morphText) {
  morphText.textContent = phrases[index];

  setInterval(() => {
    index = (index + 1) % phrases.length;
    morphText.style.opacity = '0';
    morphText.style.transform = 'translateY(20px)';

    setTimeout(() => {
      morphText.textContent = phrases[index];
      morphText.style.transform = 'translateY(-20px)';
      morphText.offsetHeight;
      morphText.style.opacity = '1';
      morphText.style.transform = 'translateY(0)';
    }, 400);
  }, 3500);
}

// Intersection Observer for Reveal Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, observerOptions);

// Observe all elements with reveal classes
document.querySelectorAll('[class*="reveal"]').forEach(el => {
  observer.observe(el);
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Subtle Parallax for Orbit
document.addEventListener('mousemove', (e) => {
  const orbit = document.querySelector('.orbit-container');
  if (!orbit) return;
  
  const mouseX = e.clientX / window.innerWidth - 0.5;
  const mouseY = e.clientY / window.innerHeight - 0.5;
  
  orbit.style.transform = `rotate(${window.scrollY * 0.05}deg) translate(${mouseX * 20}px, ${mouseY * 20}px)`;
});

// Connect Section Cursor Animation
const cursor = document.getElementById('mock-cursor');
const bubbles = [
  document.getElementById('bubble-1'),
  document.getElementById('bubble-2'),
  document.getElementById('bubble-3'),
  document.getElementById('bubble-4')
];
let bubbleIndex = 0;

function moveCursor() {
  const targetBubble = bubbles[bubbleIndex];
  if (!targetBubble) return;

  const visual = document.querySelector('.connect-visual');
  const visualRect = visual.getBoundingClientRect();
  const bubbleRect = targetBubble.getBoundingClientRect();

  // Calculate relative position based on center of bubble
  const x = (bubbleRect.left - visualRect.left) + (bubbleRect.width / 2);
  const y = (bubbleRect.top - visualRect.top) + (bubbleRect.height / 2);

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;

  bubbleIndex = (bubbleIndex + 1) % bubbles.length;
}

// Start moving the cursor
setInterval(moveCursor, 3000);
window.addEventListener('load', () => setTimeout(moveCursor, 1000));

// Certificate Click to View Full
document.querySelectorAll('.cert-image').forEach(cert => {
  cert.addEventListener('click', () => {
    const imgSrc = cert.querySelector('img').src;
    window.open(imgSrc, '_blank');
  });
});

// Automation Demo Click to View Full
document.querySelectorAll('.automation .project-demo').forEach(demo => {
  demo.style.cursor = 'pointer';
  demo.addEventListener('click', () => {
    const media = demo.querySelector('img, video');
    if (media) {
      window.open(media.src, '_blank');
    }
  });
});
// Scroll Progress Tracker Logic
window.addEventListener('scroll', () => {
    const indicator = document.querySelector('.indicator-line-progress');
    const ball = document.querySelector('.indicator-ball');
    const indicatorContainer = document.querySelector('.scroll-indicator');
    
    if (!indicator || !ball || !indicatorContainer) return;

    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    
    indicator.style.height = `${progress}%`;
    
    // Calculate ball position within the container height
    const containerHeight = indicatorContainer.offsetHeight;
    const ballPos = (progress / 100) * containerHeight;
    ball.style.top = `${ballPos - 8}px`; // Offset by half ball height (16px / 2)
});
