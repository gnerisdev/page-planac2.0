document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.header__nav');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  const scrollAmount = 150; // How many pixels to scroll

  leftArrow.addEventListener('click', () => {
    nav.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  rightArrow.addEventListener('click', () => {
    nav.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  const checkScroll = () => {
    if (nav.scrollLeft === 0) {
      leftArrow.style.opacity = '0';
      leftArrow.style.pointerEvents = 'none';
    } else {
      leftArrow.style.opacity = '1';
      leftArrow.style.pointerEvents = 'auto';
    }

    if (nav.scrollLeft + nav.clientWidth >= nav.scrollWidth - 1) {
      rightArrow.style.opacity = '0';
      rightArrow.style.pointerEvents = 'none';
    } else {
      rightArrow.style.opacity = '1';
      rightArrow.style.pointerEvents = 'auto';
    }
  };

  nav.addEventListener('scroll', checkScroll);
  window.addEventListener('resize', checkScroll); 
  checkScroll();
});