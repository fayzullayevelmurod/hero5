window.addEventListener('DOMContentLoaded', () => {
  AOS.init();

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

  const financialStatusItems = document.querySelectorAll('.financial-status__item');
  financialStatusItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      financialStatusSlider.slideTo(index);
    });
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
    img.addEventListener('click', function () {
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

  // business-networking__swiper
  const businessNetworkingSwiper = new Swiper('.business-networking__swiper', {
    slidesPerView: 3,
    spaceBetween: 12,
    speed: 700,
  });

  const cards = document.querySelectorAll('.hero5-comparison__card-animation');

  cards.forEach((card) => {
    const image = card.querySelector('.animation-img');

    card.addEventListener('mousemove', (e) => {
      const cardRect = card.getBoundingClientRect();
      const cardWidth = cardRect.width;
      const cardHeight = cardRect.height;

      const xPos = e.clientX - cardRect.left;
      const yPos = e.clientY - cardRect.top;

      const rotateX = ((yPos / cardHeight) - 0.5) * 30;
      const rotateY = ((xPos / cardWidth) - 0.5) * -30;

      image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      image.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
  });

  try {
    const cardsOne = document.querySelectorAll('.hero5-comparison__card');

    cardsOne.forEach((card) => {
      const plusBtn = card.querySelector('.plus-btn');
      const cardInfo = card.querySelector('.hero5-comparison__card-info');

      plusBtn.addEventListener('click', () => {
        cardInfo.classList.toggle('active');
        plusBtn.classList.toggle('active');
      });
    });

  } catch (error) {

  }
});