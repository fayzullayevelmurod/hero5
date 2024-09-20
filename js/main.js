window.addEventListener('DOMContentLoaded', () => {

  // media header
  const openMenuBtn = document.querySelector('.open-menu__btn');
  const headerMenu = document.querySelector('.header nav');

  openMenuBtn.addEventListener('click', () => {
    document.body.classList.toggle('no-scroll');
    headerMenu.classList.toggle('show');
    openMenuBtn.classList.toggle('active')
  });

  // physical
  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Body = Matter.Body;

  let engine;
  let words = [];
  let ground, wallLeft, wallRight;
  let wordsToDisplay = [
    "Инвесторы",
    "Клиенты",
    "Идеи",
    "Бизнес",
    "Инсайты",
    "Партнерства",
    "Комьюнити",
    "Знакомства",
    "Инсайты",
    "Инвесторы",
    "Клиенты",
    "Партнерства",
    "Бизнес",
    "Идеи"
  ]


  class Word {
    constructor(x, y, word) {
      this.body = Bodies.rectangle(x, y, word.length * 20, 40);
      this.word = word;
      World.add(engine.world, this.body);
    }

    show() {
      let pos = this.body.position;
      let angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      stroke("#0f0f0f"); // Corrected from 'SplitVendorChunkCache' to 'stroke'
      strokeWeight(3);
      rect(0, 0, this.word.length * 40 + 80, 100, 60);
      noStroke();
    }
  }
  // physical

  AOS.init();


  // Window resize handler
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
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
          breakpoints: {
            744: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            0: {
              slidesPerView: 1.3,
              spaceBetween: 12,
            }
          }
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
  const userImages = document.querySelectorAll('.business-networking__user-img-hover');
  let activeElement = null;

  // Rasmga sichqoncha borganda faqat event ishga tushadi
  userImages.forEach(img => {
    img.addEventListener('mouseover', function () {
      const userElement = this.closest('.business-networking__user');
      if (userElement) {
        if (activeElement && activeElement !== userElement) {
          activeElement.classList.remove('active');
        }
        userElement.classList.add('active');
        activeElement = userElement;
      }
    });
  });

  // Faqat active bo'lsa eventlar ishga tushadi
  document.querySelectorAll('.business-networking__user').forEach(userElement => {
    userElement.addEventListener('mouseover', function () {
      if (this.classList.contains('active')) {
        // `active` klassi mavjud bo'lsa hodisa ishlaydi
        console.log('Cursor active bo\'lgan elementda.');
      }
    });

    userElement.addEventListener('mouseout', function () {
      if (this.classList.contains('active')) {
        // `active` klassi mavjud bo'lsa hodisa ishlaydi va o'chiriladi
        console.log('Cursor elementdan chiqdi.');
        this.classList.remove('active');
        activeElement = null;
      }
    });
  });

  // business-networking__swiper
  const businessNetworkingSwiper = new Swiper('.business-networking__swiper', {
    slidesPerView: 3,
    spaceBetween: 12,
    speed: 700,
    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      744: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      0: {
        slidesPerView: 1.3,
        spaceBetween: 12,
      }
    }
  });

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
});
