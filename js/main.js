document.addEventListener('DOMContentLoaded', () => {
  // Bootstrap handles the responsive navbar state and aria-expanded attribute.

  const lightbox = document.getElementById('rrLightbox');
  const lightboxImg = document.getElementById('rrLightboxImg');
  const lightboxCaption = document.getElementById('rrLightboxCaption');
  const closeBtn = document.querySelector('.rr-lightbox-close');
  const triggers = document.querySelectorAll('[data-lightbox-src]');

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    if (lightboxImg) {
      lightboxImg.removeAttribute('src');
    }
  };

  triggers.forEach(trigger => {
    trigger.addEventListener('click', event => {
      event.preventDefault();

      if (!lightbox || !lightboxImg) return;

      const imageSrc = trigger.getAttribute('data-lightbox-src');
      const caption = trigger.getAttribute('data-lightbox-caption') || '';

      lightboxImg.src = imageSrc;
      lightboxImg.alt = caption;
      if (lightboxCaption) lightboxCaption.textContent = caption;

      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
      if (closeBtn) closeBtn.focus();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', event => {
      if (event.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && lightbox?.classList.contains('active')) {
      closeLightbox();
    }
  });

  // Touch interaction for product cards on mobile.
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => {
    card.addEventListener('touchstart', () => {
      productCards.forEach(item => item.classList.remove('touch-active'));
      card.classList.add('touch-active');
    }, { passive: true });
  });
});
