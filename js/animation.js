// Texts and image paths
const elements = [
  { type: 'text', content: "Клиенты" },
  { type: 'text', content: "Инвесторы" },
  { type: 'text', content: "Идеи" },
  { type: 'text', content: "Бизнес" },
  { type: 'text', content: "Партнерства" },
  { type: 'text', content: "Инсайты" },
  { type: 'text', content: "Комьюнити" },
  { type: 'text', content: "Знакомства" },
  { type: 'image', src: 'https://picsum.photos/200/300' },
  { type: 'image', src: 'https://picsum.photos/200/300' },
  { type: 'image', src: 'https://picsum.photos/200/300' }
];

// Function to generate a random color
function getRandomColor() {
  return `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;
}

// Function to create and animate a falling element
function createFallingElement(element) {
  const div = document.createElement('div');
  div.textContent = 'Bu yangi div';
  const intro = document.querySelector('.intro');

  // Set styles based on element type (text or image)
  if (element.type === 'text') {
    div.className = 'falling-element';
    div.style.backgroundColor = getRandomColor(); // Assign a random background color
    div.textContent = element.content;
  } else if (element.type === 'image') {
    div.className = 'falling-image';
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
