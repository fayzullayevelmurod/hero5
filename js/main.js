window.addEventListener('DOMContentLoaded', () => {

  // financial-status__slider
  const financialStatusSlider = new Swiper('.financial-status__slider', {
    slidesPerView: 2,
    spaceBetween: 12,
    navigation: {
      nextEl: '.swiper-btn__next',
      prevEl: '.swiper-btn__prev',
    },
    speed: 700,
  });
});