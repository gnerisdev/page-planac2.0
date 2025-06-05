document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.header__nav');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  const activeItem = document.querySelector('.header__nav__list .active');

  const scrollAmount = 180; 

  leftArrow.addEventListener('click', () => {
    nav.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  rightArrow.addEventListener('click', () => {
    nav.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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

  if (activeItem) {
    activeItem.scrollIntoView({ behavior: 'auto', inline: 'center' });
    nav.dispatchEvent(new Event('scroll'));
  }

  checkScroll();
});