
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
  { type: 'image', src: './images/hashtag.png', className: 'black' },
  { type: 'image', src: './images/chat.png', className: 'orange' },
  { type: 'image', src: './images/flash.png', className: 'white' },
  { type: 'image', src: './images/cursor.png', className: 'white' }
];


const { Engine, Render, World, Bodies, Body, Runner } = Matter;

// Create an engine
const engine = Engine.create();
const world = engine.world;
const intro = document.querySelector('.intro');

// Create a renderer
const render = Render.create({
  element: intro,
  engine: engine,
  options: {
    width: window.innerWidth,
    height: window.innerHeight,
    wireframes: false,
    background: '#f5f5f5'
  }
});

Render.run(render);

// Create a Matter.js runner
const runner = Runner.create();
Runner.run(runner, engine);

// Create ground (invisible)
const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 10, {
  isStatic: true,
  render: { visible: false }
});
World.add(world, ground);

// Cache images before creating falling elements
function preloadImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(img);
  });
}

// Function to create falling elements
async function createFallingElement(element) {
  let body;
  if (element.type === 'text') {
    // Create a div for text
    const div = document.createElement('div');
    div.className = `falling-element ${element.className}`;
    div.textContent = element.content;
    intro.appendChild(div);

    const rect = div.getBoundingClientRect();

    // Create a Matter.js body for the element
    body = Bodies.rectangle(Math.random() * window.innerWidth, -50, rect.width, rect.height, {
      render: { fillStyle: window.getComputedStyle(div).backgroundColor }
    });

    // Link the DOM element to the body using requestAnimationFrame
    div.style.position = 'absolute';
    const updatePosition = () => {
      div.style.left = `${body.position.x - rect.width / 2}px`;
      div.style.top = `${body.position.y - rect.height / 2}px`;
      div.style.transform = `rotate(${body.angle}rad)`;
      requestAnimationFrame(updatePosition);
    };
    requestAnimationFrame(updatePosition);

  } else if (element.type === 'image') {
    // Preload the image first to avoid lags during animation
    const img = await preloadImage(element.src);

    // Create a div for image
    const div = document.createElement('div');
    div.className = `falling-image ${element.className}`;
    div.appendChild(img);
    intro.appendChild(div);

    const rect = div.getBoundingClientRect();

    // Create a Matter.js body for the image
    body = Bodies.rectangle(Math.random() * window.innerWidth, -50, rect.width, rect.height, {
      render: { sprite: { texture: element.src, xScale: rect.width / img.width, yScale: rect.height / img.height } }
    });

    // Link the DOM element to the body using requestAnimationFrame
    div.style.position = 'absolute';
    const updatePosition = () => {
      div.style.left = `${body.position.x - rect.width / 2}px`;
      div.style.top = `${body.position.y - rect.height / 2}px`;
      div.style.transform = `rotate(${body.angle}rad)`;
      requestAnimationFrame(updatePosition);
    };
    requestAnimationFrame(updatePosition);
  }

  // Add the body to the world
  World.add(world, body);
}

// Function to start falling animation for all elements
function startFallingAnimation() {
  elements.forEach((element, index) => {
    setTimeout(() => createFallingElement(element), index * 300); // Stagger the falling time
  });
}

// Start the animation when the page loads
window.onload = startFallingAnimation;

// Adjust canvas size on window resize
window.addEventListener('resize', () => {
  Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: window.innerWidth, y: window.innerHeight }
  });
  Body.setPosition(ground, { x: window.innerWidth / 2, y: window.innerHeight });
});
