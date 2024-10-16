window.addEventListener('DOMContentLoaded', () => {
  // modal
  const modal = document.querySelector('.modal');
  const closeModalBtn = document.querySelector('.close-modal__btn');
  const openModalBtn = document.querySelector('.open-modal__btn');

  // Modalni ochish
  openModalBtn.addEventListener('click', () => {
    modal.classList.add('show');
    document.body.classList.add('no-scroll');
  });

  // Modalni yopish
  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.classList.remove('no-scroll');
  });

  // Modaldan tashqaridagi joyni bosganda yopish
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
      document.body.classList.remove('no-scroll');
    }
  });
  // Custom select elementini tanlash
  const customSelect = document.querySelector('.custom-select');
  const selectedText = customSelect.querySelector('.selected-text');
  const optionsContainer = customSelect.querySelector('.options');
  const optionsList = optionsContainer.querySelectorAll('.option');

  // Select ochilib yopilishi uchun click event
  selectedText.addEventListener('click', () => {
    optionsContainer.classList.toggle('active');
    selectedText.classList.toggle('active');
  });
  console.log('salom');

  // Variant tanlash uchun har bir elementga event qo'shamiz
  optionsList.forEach(option => {
    option.addEventListener('click', () => {
      selectedText.querySelector('span').innerText = option.innerText;
      optionsContainer.classList.remove('active');
      selectedText.classList.remove('active');
    });
  });

  // Click eventini tashqarida bosilganda yopish uchun
  document.addEventListener('click', (e) => {
    if (!customSelect.contains(e.target)) {
      optionsContainer.classList.remove('active');
      selectedText.classList.remove('active');
    }
  });

  // Media Header uchun
  const openMenuBtn = document.querySelector('.open-menu__btn');
  const headerMenu = document.querySelector('.header nav');

  openMenuBtn.addEventListener('click', () => {
    document.body.classList.toggle('no-scroll');
    headerMenu.classList.toggle('show');
    openMenuBtn.classList.toggle('active');
  });

  // AOS init
  AOS.init();

  // Tablar uchun hodisalar
  const financialStatusItems = document.querySelectorAll('.financial-status__item');
  const tabContents = document.querySelectorAll('.tab-content');

  function activateTab(index) {
    financialStatusItems.forEach(item => item.classList.remove('active'));
    tabContents.forEach(content => content.style.display = 'none');

    financialStatusItems[index].classList.add('active');
    tabContents[index].style.display = 'block';

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
          744: { slidesPerView: 2, spaceBetween: 12 },
          0: { slidesPerView: 1.3, spaceBetween: 12 }
        }
      });
    }
  }

  financialStatusItems.forEach((item, index) => {
    item.addEventListener('click', () => activateTab(index));
  });

  // Dastlabki tabni faollashtirish
  activateTab(0);

  // Hero5 slider
  new Swiper('.hero5-comparison__soon-slider', {
    slidesPerView: 1,
    spaceBetween: 12,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    speed: 700,
  });

  // Business-networking foydalanuvchi rasmlari uchun hodisalar
  const userImages = document.querySelectorAll('.business-networking__user-img-hover');
  let activeElement = null;

  userImages.forEach(img => {
    img.addEventListener('mouseover', () => {
      const userElement = img.closest('.business-networking__user');
      if (userElement && activeElement !== userElement) {
        activeElement?.classList.remove('active');
        userElement.classList.add('active');
        activeElement = userElement;
      }
    });
  });

  document.querySelectorAll('.business-networking__user').forEach(userElement => {
    userElement.addEventListener('mouseover', function () {
      if (this.classList.contains('active')) {
        console.log('Cursor active bo\'lgan elementda.');
      }
    });

    userElement.addEventListener('mouseout', function () {
      if (this.classList.contains('active')) {
        console.log('Cursor elementdan chiqdi.');
        this.classList.remove('active');
        activeElement = null;
      }
    });
  });

  // Business-networking Swiper
  new Swiper('.business-networking__swiper', {
    slidesPerView: 3,
    spaceBetween: 12,
    speed: 700,
    breakpoints: {
      992: { slidesPerView: 3, spaceBetween: 12 },
      744: { slidesPerView: 2, spaceBetween: 12 },
      0: { slidesPerView: 1.3, spaceBetween: 12 }
    }
  });

  // Kartochka harakatlari
  const cards = document.querySelectorAll('.animation-img__card');

  cards.forEach(card => {
    const images = card.querySelectorAll('.animation-img');

    card.addEventListener('mousemove', (e) => {
      const cardRect = card.getBoundingClientRect();
      const rotateX = ((e.clientY - cardRect.top) / cardRect.height - 0.5) * 40;
      const rotateY = ((e.clientX - cardRect.left) / cardRect.width - 0.5) * -40;

      images.forEach(image => {
        image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    });

    card.addEventListener('mouseleave', () => {
      images.forEach(image => {
        image.style.transform = `rotateX(0deg) rotateY(0deg)`;
      });
    });
  });

  // Kartochkalar uchun "+" tugmasi
  const cardsOne = document.querySelectorAll('.hero5-comparison__card');

  cardsOne.forEach(card => {
    const plusBtn = card.querySelector('.plus-btn');
    const cardInfo = card.querySelector('.hero5-comparison__card-info');

    plusBtn.addEventListener('click', () => {
      cardInfo.classList.toggle('active');
      plusBtn.classList.toggle('active');
    });
  });
});
