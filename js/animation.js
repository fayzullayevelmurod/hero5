// Texts and image paths
const elements = [
  { type: 'text', content: "Клиенты", className: 'black' },
  { type: 'text', content: "Инвесторы", className: 'orange' },
  { type: 'text', content: "Идеи", className: 'white' },
  { type: 'text', content: "Бизнес", className: 'gold' },
  { type: 'text', content: "Партнерства", className: 'black' },
  { type: 'text', content: "Инсайты", className: 'white' },
  { type: 'text', content: "Комьюнити", className: 'orange' },
  { type: 'text', content: "Знакомства", className: 'black' },
  { type: 'text', content: "Инсайты", className: 'gold' },
  { type: 'text', content: "Инвесторы", className: 'white' },
  { type: 'text', content: "Клиенты", className: 'black' },
  { type: 'text', content: "Партнерства", className: 'gold' },
  { type: 'text', content: "Бизнес", className: 'orange' },
  { type: 'text', content: "Идеи", className: 'black' },
  { type: 'image', src: './images/flash.svg', className: 'white' },
  { type: 'image', src: './images/chat.svg', className: 'orange' },
  { type: 'image', src: './images/hashtag.svg', className: 'black' },
  { type: 'image', src: './images/cursor.svg', className: 'white' }
];


// Function to generate a random color
function getRandomColor() {
  // return `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;
}

// Function to create and animate a falling element
// function createFallingElement(element) {
//   const div = document.createElement('div');
//   const intro = document.querySelector('.intro-animation__elments');

//   // Set styles based on element type (text or image)
//   if (element.type === 'text') {
//     div.className = 'falling-element';
//     div.style.backgroundColor = getRandomColor(); // Assign a random background color
//     div.textContent = element.content;
//   } else if (element.type === 'image') {
//     div.className = 'falling-image';
//     const img = document.createElement('img');
//     img.src = element.src;
//     img.style.width = '100%';
//     img.style.height = '100%';
//     div.appendChild(img);
//   }

//   // Set random initial position and rotation
//   const randomX = Math.random() * intro.offsetWidth;
//   const randomRotation = Math.random() * 360 - 180;
//   div.style.position = 'absolute'; // Make sure the position is absolute for proper placement
//   div.style.left = `${randomX}px`;
//   div.style.bottom = `107%`;
//   div.style.transform = `rotate(${randomRotation}deg)`;

//   // Append the element to the intro
//   intro.appendChild(div);

//   // Trigger the falling animation with a delay for each element
//   setTimeout(() => {
//     div.style.transform = `translateY(${intro.offsetHeight + 100}px) rotate(${randomRotation}deg)`;
//     div.style.opacity = '1';
//   }, 100);
// }
function createFallingElement(element) {
  const div = document.createElement('div');
  const intro = document.querySelector('.intro-animation__elments');

  // Add the specific class from the element object
  if (element.type === 'text') {
    div.className = `falling-element ${element.className}`; // Add both 'falling-element' and the specific class
    // div.style.backgroundColor = getRandomColor(); // Assign a random background color
    div.textContent = element.content;
  } else if (element.type === 'image') {
    div.className = `falling-image ${element.className}`; // Add both 'falling-image' and the specific class
    const img = document.createElement('img');
    img.src = element.src;
    img.style.width = '100%';
    img.style.height = '100%';
    div.appendChild(img);
  }

  // Set random initial position and rotation
  const randomX = Math.random() * intro.offsetWidth;
  const randomRotation = Math.random() * 360 - 180;
  div.style.position = 'absolute'; // Make sure the position is absolute for proper placement
  div.style.left = `${randomX}px`;
  div.style.bottom = `107%`;
  div.style.transform = `rotate(${randomRotation}deg)`;

  // Append the element to the intro
  intro.appendChild(div);

  // Trigger the falling animation with a delay for each element
  setTimeout(() => {
    div.style.transform = `translateY(${intro.offsetHeight + 100}px) rotate(${randomRotation}deg)`;
    div.style.opacity = '1';
  }, 100);
}


// Function to initiate falling animation for each element
function startFallingAnimation() {
  elements.forEach((element, index) => {
    setTimeout(() => createFallingElement(element), index * 200); // Stagger the start time of each element
  });
}

// Start the animation when the page loads
window.onload = startFallingAnimation;
