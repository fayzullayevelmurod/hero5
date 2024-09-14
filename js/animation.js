// // Texts and image paths
// const elements = [
//   { type: 'text', content: "Клиенты", className: 'black' },
//   { type: 'text', content: "Инвесторы", className: 'orange' },
//   { type: 'text', content: "Идеи", className: 'white' },
//   { type: 'text', content: "Бизнес", className: 'gold' },
//   { type: 'text', content: "Партнерства", className: 'black' },
//   { type: 'text', content: "Инсайты", className: 'white' },
//   { type: 'text', content: "Комьюнити", className: 'orange' },
//   { type: 'text', content: "Знакомства", className: 'black' },
//   { type: 'text', content: "Инсайты", className: 'gold' },
//   { type: 'text', content: "Инвесторы", className: 'white' },
//   { type: 'text', content: "Клиенты", className: 'black' },
//   { type: 'text', content: "Партнерства", className: 'gold' },
//   { type: 'text', content: "Бизнес", className: 'orange' },
//   { type: 'text', content: "Идеи", className: 'black' },
//   { type: 'image', src: './images/flash.svg', className: 'white' },
//   { type: 'image', src: './images/chat.svg', className: 'orange' },
//   { type: 'image', src: './images/hashtag.svg', className: 'black' },
//   { type: 'image', src: './images/cursor.svg', className: 'white' }
// ];

// // Function to generate a random color
// function getRandomColor() {
//   return `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;
// }

// // Function to create a falling element with realistic physics
// function createFallingElement(element) {
//   const div = document.createElement('div');
//   const intro = document.querySelector('.intro-animation__elments');

//   // Add the specific class from the element object
//   if (element.type === 'text') {
//     div.className = `falling-element ${element.className}`;
//     div.textContent = element.content;
//   } else if (element.type === 'image') {
//     div.className = `falling-image ${element.className}`;
//     const img = document.createElement('img');
//     img.src = element.src;
//     img.style.width = '100%';
//     img.style.height = '100%';
//     div.appendChild(img);
//   }

//   // Set random initial position and rotation
//   const randomX = Math.random() * intro.offsetWidth;
//   const randomRotation = Math.random() * 360 - 180;
//   const randomDelay = Math.random() * 1 + 0.5; // Vary delay to simulate air resistance

//   div.style.position = 'absolute';
//   div.style.left = `${randomX}px`;
//   div.style.bottom = `100%`;
//   div.style.transform = `rotate(${randomRotation}deg)`;
//   div.style.transition = `transform ${randomDelay + 3}s ease-in, opacity ${randomDelay}s ease-out`; // Gradual fall

//   // Append the element to the intro
//   intro.appendChild(div);

//   // Trigger the falling animation with a delay for each element
//   setTimeout(() => {
//     const randomTilt = Math.random() * 30 - 15; // Simulate slight side movement
//     div.style.transform = `translateY(${intro.offsetHeight + 100}px) rotate(${randomRotation + randomTilt}deg)`;
//     div.style.opacity = '1';
//   }, 100);

//   // Add a small bounce at the end
//   div.addEventListener('transitionend', () => {
//     setTimeout(() => {
//       div.style.transform = `translateY(${intro.offsetHeight + 90}px) rotate(${randomRotation}deg)`;
//     }, 100);
//   });
// }

// // Function to initiate falling animation for each element
// function startFallingAnimation() {
//   elements.forEach((element, index) => {
//     setTimeout(() => createFallingElement(element), index * 200); // Stagger the start time of each element
//   });
// }

// // Start the animation when the page loads
// window.onload = startFallingAnimation;

// Texts and image paths
// const elements = [
//   { type: 'text', content: "Клиенты", className: 'black' },
//   { type: 'text', content: "Инвесторы", className: 'orange' },
//   { type: 'text', content: "Идеи", className: 'white' },
//   { type: 'text', content: "Бизнес", className: 'gold' },
//   { type: 'text', content: "Партнерства", className: 'black' },
//   { type: 'text', content: "Инсайты", className: 'white' },
//   { type: 'text', content: "Комьюнити", className: 'orange' },
//   { type: 'text', content: "Знакомства", className: 'black' },
//   { type: 'text', content: "Инсайты", className: 'gold' },
//   { type: 'text', content: "Инвесторы", className: 'white' },
//   { type: 'text', content: "Клиенты", className: 'black' },
//   { type: 'text', content: "Партнерства", className: 'gold' },
//   { type: 'text', content: "Бизнес", className: 'orange' },
//   { type: 'text', content: "Идеи", className: 'black' },
//   { type: 'image', src: './images/flash.svg', className: 'white' },
//   { type: 'image', src: './images/chat.svg', className: 'orange' },
//   { type: 'image', src: './images/hashtag.svg', className: 'black' },
//   { type: 'image', src: './images/cursor.svg', className: 'white' }
// ];

// // Function to generate a random z-index for layering
// function getRandomZIndex() {
//   return Math.floor(Math.random() * 100);
// }

// // Function to create a falling element with more realism
// function createFallingElement(element) {
//   const div = document.createElement('div');
//   const intro = document.querySelector('.intro-animation__elments');

//   // Add the specific class from the element object
//   if (element.type === 'text') {
//     div.className = `falling-element ${element.className}`;
//     div.textContent = element.content;
//   } else if (element.type === 'image') {
//     div.className = `falling-image ${element.className}`;
//     const img = document.createElement('img');
//     img.src = element.src;
//     img.style.width = '100%';
//     img.style.height = '100%';
//     div.appendChild(img);
//   }

//   // Set random initial position, rotation, and z-index
//   const randomX = Math.random() * intro.offsetWidth;
//   const randomRotation = Math.random() * 360 - 180;
//   const randomZIndex = getRandomZIndex(); // Random z-index for 3D effect
//   const randomDelay = Math.random() * 1 + 0.5; // Vary delay to simulate air resistance

//   div.style.position = 'absolute';
//   div.style.left = `${randomX}px`;
//   div.style.bottom = `100%`;
//   div.style.transform = `rotate(${randomRotation}deg)`;
//   div.style.transition = `transform ${randomDelay + 3}s ease-in, opacity ${randomDelay}s ease-out`; // Gradual fall
//   div.style.zIndex = randomZIndex; // Layering effect for realism

//   // Append the element to the intro
//   intro.appendChild(div);

//   // Trigger the falling animation with a delay for each element
//   setTimeout(() => {
//     const randomTilt = Math.random() * 30 - 15; // Simulate slight side movement
//     div.style.transform = `translateY(${intro.offsetHeight + 100}px) rotate(${randomRotation + randomTilt}deg)`;
//     div.style.opacity = '1';
//   }, 100);

//   // Add a small bounce at the end
//   div.addEventListener('transitionend', () => {
//     setTimeout(() => {
//       div.style.transform = `translateY(${intro.offsetHeight + 90}px) rotate(${randomRotation}deg)`;
//     }, 100);
//   });
// }

// // Function to initiate falling animation for each element
// function startFallingAnimation() {
//   elements.forEach((element, index) => {
//     setTimeout(() => createFallingElement(element), index * 200); // Stagger the start time of each element
//   });
// }

// // Start the animation when the page loads
// window.onload = startFallingAnimation;

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

// // Matter.js module aliases
const { Engine, Render, World, Bodies, Body } = Matter;

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
    wireframes: false, // Disable wireframes for clean rendering
    background: '#f5f5f5'
  }
});

Render.run(render);
Engine.run(engine);

// Create ground (invisible)
const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 10, {
  isStatic: true,
  render: { visible: false } // Make it invisible
});
World.add(world, ground);

// Function to create falling elements
function createFallingElement(element) {
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

    // Link the DOM element to the body
    div.style.position = 'absolute';
    Matter.Events.on(engine, 'beforeUpdate', () => {
      div.style.left = `${body.position.x - rect.width / 2}px`;
      div.style.top = `${body.position.y - rect.height / 2}px`;
      div.style.transform = `rotate(${body.angle}rad)`;
    });
  } else if (element.type === 'image') {
    // Create a div for image
    const div = document.createElement('div');
    div.className = `falling-image ${element.className}`;
    const img = document.createElement('img');
    img.src = element.src;
    div.appendChild(img);
    intro.appendChild(div);

    const rect = div.getBoundingClientRect();

    // Create a Matter.js body for the image
    body = Bodies.rectangle(Math.random() * window.innerWidth, -50, 60, 60, {
      render: { sprite: { texture: element.src, xScale: 1, yScale: 1 } }
    });

    // Link the DOM element to the body
    div.style.position = 'absolute';
    Matter.Events.on(engine, 'beforeUpdate', () => {
      div.style.left = `${body.position.x - 30}px`; // Center the image
      div.style.top = `${body.position.y - 30}px`;
      div.style.transform = `rotate(${body.angle}rad)`;
    });
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



// const { Engine, Render, World, Bodies, Body, Common } = Matter;

// // Create an engine
// const engine = Engine.create();
// const world = engine.world;
// const intro = document.querySelector('.intro-animation__elments');

// // Create a renderer
// const render = Render.create({
//   element: intro,
//   engine: engine,
//   options: {
//     width: window.innerWidth,
//     height: window.innerHeight,
//     wireframes: false, // Disable wireframes for clean rendering
//     background: '#f5f5f5'
//   }
// });

// Render.run(render);
// Engine.run(engine);

// // Create ground (invisible)
// const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 10, {
//   isStatic: true,
//   render: { visible: false } // Make it invisible
// });
// World.add(world, ground);

// // Ensure all bodies are valid before updating the engine
// Matter.Events.on(engine, 'beforeUpdate', () => {
//   world.bodies.forEach((body) => {
//     if (!body || !body.position || !body.bounds) {
//       console.warn("Invalid body detected and skipped:", body);
//     }
//   });
// });

// // Function to create falling elements
// function createFallingElement(element) {
//   let body;
//   const yStart = window.innerHeight; // Set starting y position to the bottom of the window

//   if (element.type === 'text') {
//     const div = document.createElement('div');
//     div.className = `falling-element ${element.className}`;
//     div.textContent = element.content;
//     intro.appendChild(div);

//     const rect = div.getBoundingClientRect();

//     body = Bodies.rectangle(Math.random() * window.innerWidth, yStart, rect.width, rect.height, {
//       render: { fillStyle: window.getComputedStyle(div).backgroundColor }
//     });

//     div.style.position = 'absolute';
//     Matter.Events.on(engine, 'beforeUpdate', () => {
//       if (body.position) {
//         div.style.left = `${body.position.x - rect.width / 2}px`;
//         div.style.top = `${body.position.y - rect.height / 2}px`;
//         div.style.transform = `rotate(${body.angle}rad)`;
//       }
//     });
//   } else if (element.type === 'image') {
//     const div = document.createElement('div');
//     div.className = `falling-image ${element.className}`;
//     const img = document.createElement('img');
//     img.src = element.src;
//     div.appendChild(img);
//     intro.appendChild(div);

//     const rect = div.getBoundingClientRect();

//     body = Bodies.rectangle(Math.random() * window.innerWidth, yStart, 60, 60, {
//       render: { sprite: { texture: element.src, xScale: 1, yScale: 1 } }
//     });

//     div.style.position = 'absolute';
//     Matter.Events.on(engine, 'beforeUpdate', () => {
//       if (body.position) {
//         div.style.left = `${body.position.x - 30}px`;
//         div.style.top = `${body.position.y - 30}px`;
//         div.style.transform = `rotate(${body.angle}rad)`;
//       }
//     });
//   }

//   if (body) {
//     World.add(world, body);
//   }
// }

// // Function to start falling animation for all elements
// function startFallingAnimation() {
//   elements.forEach((element, index) => {
//     setTimeout(() => createFallingElement(element), index * 300);
//   });
// }

// // Start the animation when the page loads
// window.onload = startFallingAnimation;

// // Handle window resize safely
// window.addEventListener('resize', () => {
//   const width = window.innerWidth;
//   const height = window.innerHeight;

//   // Update the canvas and ground size
//   render.canvas.width = width;
//   render.canvas.height = height;

//   // Ensure bodies are within valid bounds and update ground position
//   Body.setPosition(ground, { x: width / 2, y: height });
//   World.remove(world, ground); // Remove the old ground
//   const newGround = Bodies.rectangle(width / 2, height, width, 10, {
//     isStatic: true,
//     render: { visible: false }
//   });
//   World.add(world, newGround); // Add new ground with updated size
// });