// Hamburger menu
const hamburgerButton = document.querySelector('.hamburger');
const navMenu = document.getElementById('nav-menu');
const menuOverlay = document.querySelector('.menu-overlay');
if (hamburgerButton && navMenu) {
  function setMenuState(isOpen) {
    navMenu.classList.toggle('open', isOpen);
    hamburgerButton.classList.toggle('active', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    hamburgerButton.setAttribute('aria-expanded', String(isOpen));
  }

  hamburgerButton.addEventListener('click', () => {
    const willOpen = !navMenu.classList.contains('open');
    setMenuState(willOpen);
  });

  // Close when clicking overlay
  menuOverlay?.addEventListener('click', () => setMenuState(false));

  // Close when clicking a nav link (mobile)
  navMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenuState(false)));
}

// Reveal on scroll
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal-left, .reveal-right, .reveal-fade, .timeline .checkpoint').forEach((el) => {
  observer.observe(el);
});

// Slideshow
function setupSlideshow(container) {
  const slidesContainer = container.querySelector('.slides');
  const images = Array.from(slidesContainer.querySelectorAll('img'));
  const prevBtn = container.querySelector('.prev');
  const nextBtn = container.querySelector('.next');
  const dotsContainer = container.querySelector('.dots');

  if (images.length === 0) {
    container.classList.add('no-content');
    return;
  } else {
    container.classList.remove('no-content');
  }

  let index = 0;
  let autoTimer = null;

  function render() {
    images.forEach((img, i) => img.classList.toggle('active', i === index));
    dotsContainer.querySelectorAll('button').forEach((dot, i) => dot.classList.toggle('active', i === index));
  }

  function go(to) {
    index = (to + images.length) % images.length;
    render();
  }

  function next() { go(index + 1); }
  function prev() { go(index - 1); }

  // dots
  dotsContainer.innerHTML = '';
  images.forEach((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.addEventListener('click', () => go(i));
    dotsContainer.appendChild(b);
  });

  render();

  // controls
  prevBtn?.addEventListener('click', prev);
  nextBtn?.addEventListener('click', next);

  // auto-advance
  function startAuto() { autoTimer = setInterval(next, 5000); }
  function stopAuto() { if (autoTimer) clearInterval(autoTimer); }
  container.addEventListener('mouseenter', stopAuto);
  container.addEventListener('mouseleave', startAuto);
  startAuto();

  // Lightbox on click
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox-image');
  const lightboxCaption = document.querySelector('.lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');

  function openLightbox(img) {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || '';
    lightboxCaption.textContent = img.dataset.caption || img.alt || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.removeAttribute('src');
  }

  images.forEach((img) => img.addEventListener('click', () => openLightbox(img)));
  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox?.classList.contains('open')) closeLightbox();
  });
}

// Initialize slideshow(s)
document.querySelectorAll('.about-slideshow').forEach(setupSlideshow);