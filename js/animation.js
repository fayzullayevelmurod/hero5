
// const elements = [
//   { type: 'text', content: "Клиенты", className: 'black' },
//   { type: 'text', content: "Инвесторы", className: 'orange' },
//   { type: 'image', src: './images/flash.png', className: 'white' },
//   { type: 'text', content: "Идеи", className: 'white' },
//   { type: 'text', content: "Бизнес", className: 'gold' },
//   { type: 'image', src: './images/hashtag.png', className: 'black' },
//   { type: 'text', content: "Партнерства", className: 'black' },
//   { type: 'image', src: './images/chat.png', className: 'orange' },
//   { type: 'text', content: "Инсайты", className: 'white' },
//   { type: 'text', content: "Комьюнити", className: 'orange' },
//   { type: 'text', content: "Знакомства", className: 'black' },
//   { type: 'text', content: "Инсайты", className: 'gold' },
//   { type: 'text', content: "Инвесторы", className: 'white' },
//   { type: 'text', content: "Клиенты", className: 'black' },
//   { type: 'text', content: "Партнерства", className: 'gold' },
//   { type: 'text', content: "Бизнес", className: 'orange' },
//   { type: 'text', content: "Идеи", className: 'black' },
//   { type: 'image', src: './images/cursor.png', className: 'white' }
// ];

// const { Engine, Render, World, Bodies, Body, Runner } = Matter;

// // Create an engine
// const engine = Engine.create();
// const world = engine.world;
// const intro = document.querySelector('.intro');

// // Create a renderer
// const render = Render.create({
//   element: intro,
//   engine: engine,
//   options: {
//     width: window.innerWidth,
//     height: window.innerHeight,
//     wireframes: false,
//     background: '#f5f5f5'
//   }
// });

// Render.run(render);

// // Create a Matter.js runner
// const runner = Runner.create();
// Runner.run(runner, engine);

// // Create boundaries (walls and ground)
// const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 10, {
//   isStatic: true,
//   render: { visible: false }
// });

// const leftWall = Bodies.rectangle(0, window.innerHeight / 2, 10, window.innerHeight, {
//   isStatic: true,
//   render: { visible: false }
// });

// const rightWall = Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 10, window.innerHeight, {
//   isStatic: true,
//   render: { visible: false }
// });

// World.add(world, [ground, leftWall, rightWall]);

// // Cache images before creating falling elements
// function preloadImage(url) {
//   return new Promise((resolve) => {
//     const img = new Image();
//     img.src = url;
//     img.onload = () => resolve(img);
//   });
// }

// // Function to create falling elements
// async function createFallingElement(element) {
//   let body;
//   if (element.type === 'text') {
//     const div = document.createElement('div');
//     div.className = `falling-element ${element.className}`;
//     div.textContent = element.content;
//     intro.appendChild(div);

//     const rect = div.getBoundingClientRect();

//     body = Bodies.rectangle(Math.random() * window.innerWidth, -50, rect.width, rect.height, {
//       restitution: 0.5,
//       friction: 0.2,
//       render: { fillStyle: window.getComputedStyle(div).backgroundColor }
//     });

//     div.style.position = 'absolute';
//     const updatePosition = () => {
//       div.style.left = `${body.position.x - rect.width / 2}px`;
//       div.style.top = `${body.position.y - rect.height / 2}px`;
//       div.style.transform = `rotate(${body.angle}rad)`;
//       requestAnimationFrame(updatePosition);
//     };
//     requestAnimationFrame(updatePosition);

//   } else if (element.type === 'image') {
//     const img = await preloadImage(element.src);

//     const div = document.createElement('div');
//     div.className = `falling-image ${element.className}`;
//     div.appendChild(img);
//     intro.appendChild(div);

//     const rect = div.getBoundingClientRect();

//     body = Bodies.rectangle(Math.random() * window.innerWidth, -50, rect.width, rect.height, {
//       restitution: 0.5,
//       friction: 0.2,
//       render: { sprite: { texture: element.src, xScale: rect.width / img.width, yScale: rect.height / img.height } }
//     });

//     div.style.position = 'absolute';
//     const updatePosition = () => {
//       div.style.left = `${body.position.x - rect.width / 2}px`;
//       div.style.top = `${body.position.y - rect.height / 2}px`;
//       div.style.transform = `rotate(${body.angle}rad)`;
//       requestAnimationFrame(updatePosition);
//     };
//     requestAnimationFrame(updatePosition);
//   }

//   World.add(world, body);
// }

// // Function to start falling animation for all elements
// function startFallingAnimation() {
//   let elementsToShow = elements;

//   // If screen width is less than 768px, show only 7 elements
//   if (window.innerWidth < 768) {
//     elementsToShow = elements.slice(0, 7); // Only select the first 7 elements
//   }

//   elementsToShow.forEach((element, index) => {
//     setTimeout(() => createFallingElement(element), index * 300); // Stagger the falling time
//   });
// }
// function addCursorHoverEffect(div) {
//   const originalTransform = div.style.transform;

//   const mouseEnterHandler = () => {
//     div.style.transform = 'translateY(-10px) scale(1.1)';
//     div.style.transition = 'transform 0.3s ease';
//   };

//   const mouseLeaveHandler = () => {
//     div.style.transform = originalTransform;
//   };

//   div.addEventListener('mouseenter', mouseEnterHandler);
//   div.addEventListener('mouseleave', mouseLeaveHandler);
// }


// // Start the animation when the page loads
// window.onload = startFallingAnimation;

// // Adjust canvas size on window resize
// window.addEventListener('resize', () => {
//   Render.lookAt(render, {
//     min: { x: 0, y: 0 },
//     max: { x: window.innerWidth, y: window.innerHeight }
//   });
//   Body.setPosition(ground, { x: window.innerWidth / 2, y: window.innerHeight });
//   Body.setPosition(leftWall, { x: 0, y: window.innerHeight / 2 });
//   Body.setPosition(rightWall, { x: window.innerWidth, y: window.innerHeight / 2 });
// });
