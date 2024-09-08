window.addEventListener('DOMContentLoaded', () => {
  AOS.init();

  // financial-status__slider
  // const financialStatusSlider = new Swiper('.financial-status__slider', {
  //   slidesPerView: 2,
  //   spaceBetween: 12,
  //   navigation: {
  //     nextEl: '.swiper-btn__next',
  //     prevEl: '.swiper-btn__prev',
  //   },
  //   speed: 700,
  // });

  // tabs
  // tabs for financial-status__item
  const financialStatusItems = document.querySelectorAll('.financial-status__item');
  const tabContents = document.querySelectorAll('.tab-content');

  financialStatusItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      // Remove active class from all items and hide all tab contents
      financialStatusItems.forEach(i => i.classList.remove('active'));
      tabContents.forEach(content => content.style.display = 'none');

      // Add active class to clicked item and show corresponding tab content
      item.classList.add('active');
      tabContents[index].style.display = 'block';

      // Reinitialize the Swiper slider for the active tab
      const activeSlider = tabContents[index].querySelector('.swiper-container');
      if (activeSlider) {
        new Swiper(activeSlider, {
          slidesPerView: 2,
          spaceBetween: 12,
          navigation: {
            nextEl: '.swiper-btn__next',
            prevEl: '.swiper-btn__prev',
          },
          speed: 700,
        });
      }
    });
  });

  // Activate the first tab by default
  financialStatusItems[0].click();

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

  // const cards = document.querySelectorAll('.animation-img__card');

  // cards.forEach((card) => {
  //   const image = card.querySelectorAll('.animation-img');

  //   card.addEventListener('mousemove', (e) => {
  //     const cardRect = card.getBoundingClientRect();
  //     const cardWidth = cardRect.width;
  //     const cardHeight = cardRect.height;

  //     const xPos = e.clientX - cardRect.left;
  //     const yPos = e.clientY - cardRect.top;

  //     const rotateX = ((yPos / cardHeight) - 0.5) * 30;
  //     const rotateY = ((xPos / cardWidth) - 0.5) * -30;

  //     image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  //   });

  //   card.addEventListener('mouseleave', () => {
  //     image.style.transform = `rotateX(0deg) rotateY(0deg)`;
  //   });
  // });
  const cards = document.querySelectorAll('.animation-img__card');

  cards.forEach((card) => {
    const images = card.querySelectorAll('.animation-img'); // Barcha rasm elementlarini tanlaymiz

    card.addEventListener('mousemove', (e) => {
      const cardRect = card.getBoundingClientRect();
      const cardWidth = cardRect.width;
      const cardHeight = cardRect.height;

      const xPos = e.clientX - cardRect.left;
      const yPos = e.clientY - cardRect.top;

      // Rotate qiymatlarini oshiramiz
      const rotateX = ((yPos / cardHeight) - 0.5) * 40; // Yuqori/pastki harakat
      const rotateY = ((xPos / cardWidth) - 0.5) * -40; // Chap/o'ng harakat

      // Har bir rasm uchun transform qo'llaymiz
      images.forEach((image) => {
        image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    });

    card.addEventListener('mouseleave', () => {
      images.forEach((image) => {
        image.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`; // Dastlabki holatga qaytarish
      });
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


  // const applicationConveniencesSection = document.querySelector('.application-conveniences');
  // const phoneImg = document.querySelector('.phone__img');

  // let isActive = false; // active klassi qo'shilganligini kuzatish uchun flag

  // window.addEventListener('scroll', function () {
  //   const sectionTop = applicationConveniencesSection.getBoundingClientRect().top;
  //   const windowHeight = window.innerHeight;

  //   // Agar section yuqori qismi ekran ichida bo'lsa
  //   if (sectionTop < windowHeight && sectionTop > 0) {
  //     if (!isActive) {
  //       phoneImg.classList.add('active');
  //       applicationConveniencesSection.classList.add('active');
  //       isActive = true; // active klassi qo'shilganini belgilash
  //     }
  //   } else {
  //     // Agar section chiqib ketsa
  //     if (isActive) {
  //       applicationConveniencesSection.classList.remove('active');
  //       isActive = false; // active klassi olinganini belgilash
  //     }
  //   }
  // });
});