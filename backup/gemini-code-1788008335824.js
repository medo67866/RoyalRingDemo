document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Accessibility Toggle
  const navbarToggler = document.querySelector('.navbar-toggler');
  if (navbarToggler) {
    navbarToggler.addEventListener('click', () => {
      const expanded = navbarToggler.getAttribute('aria-expanded') === 'true' || false;
      navbarToggler.setAttribute('aria-expanded', !expanded);
    });
  }

  // Accessible Lightbox Controller
  const lightbox = document.getElementById('rrLightbox');
  const lightboxImg = document.getElementById('rrLightboxImg');
  const lightboxCaption = document.getElementById('rrLightboxCaption');
  const closeBtn = document.querySelector('.rr-lightbox-close');

  const triggers = document.querySelectorAll('[data-lightbox-src]');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const imgSrc = trigger.getAttribute('data-lightbox-src');
      const caption = trigger.getAttribute('data-lightbox-caption') || '';

      if (lightbox && lightboxImg) {
        lightboxImg.src = imgSrc;
        lightboxImg.alt = caption;
        if (lightboxCaption) lightboxCaption.textContent = caption;
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        if (closeBtn) closeBtn.focus();
      }
    });
  });

  const closeLightbox = () => {
    if (lightbox) {
      lightbox.classList.remove('active');
      lightbox.setAttribute('aria-hidden', 'true');
    }
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  // Mobile Touch Support for Interactive Product Cards
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => {
    card.addEventListener('touchstart', () => {
      productCards.forEach(c => c.classList.remove('touch-active'));
      card.classList.add('touch-active');
    }, { passive: true });
  });
});