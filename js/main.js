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

  // hero5-comparison__soon-slider
  const hero5ComparisonSoonSlider = new Swiper('.hero5-comparison__soon-slider', {
    slidesPerView: 1,
    spaceBetween: 12,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    speed: 700,
  });

  // business-networking__user
  // Add click event listener to business-networking__user-img elements
  const userImages = document.querySelectorAll('.business-networking__user-img');
  let activeElement = null;

  userImages.forEach(img => {
    img.addEventListener('click', function() {
      const userElement = this.closest('.business-networking__user');
      if (userElement) {
        if (activeElement && activeElement !== userElement) {
          activeElement.classList.remove('active');
        }
        userElement.classList.toggle('active');
        activeElement = userElement.classList.contains('active') ? userElement : null;
      }
    });
  });
});