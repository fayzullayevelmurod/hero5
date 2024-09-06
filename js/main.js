window.addEventListener('DOMContentLoaded', () => {
  // Elementlarni random joylashuvga tushirish
  // document.querySelectorAll('.falling-element').forEach((element, index) => {
  //   element.style.left = `${Math.random() * 90}vw`;
  //   element.style.animationDelay = `${Math.random() * 2}s`;

  //   // Elementni tortib surish imkoniyatini qo'shish
  //   let isDragging = false;
  //   let offsetX, offsetY;

  //   element.addEventListener('mousedown', (e) => {
  //     isDragging = true;
  //     offsetX = e.clientX - element.getBoundingClientRect().left;
  //     offsetY = e.clientY - element.getBoundingClientRect().top;
  //     element.style.transition = "none"; // harakatni to'xtatish
  //   });

  //   document.addEventListener('mousemove', (e) => {
  //     if (isDragging) {
  //       element.style.left = `${e.clientX - offsetX}px`;
  //       element.style.top = `${e.clientY - offsetY}px`;
  //     }
  //   });

  //   document.addEventListener('mouseup', () => {
  //     isDragging = false;
  //     element.style.transition = "all 0.5s ease"; // o'tkazgandan keyin sekin to'xtaydi
  //   });
  // });

  // Matter.js fizik engine-ni boshlash
  // const { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint } = Matter;

  // const engine = Engine.create();
  // const world = engine.world;

  // const width = window.innerWidth;
  // const height = window.innerHeight;

  // // Sceneni yaratish
  // const render = Render.create({
  //   element: document.getElementById('scene'),
  //   engine: engine,
  //   options: {
  //     width: width,
  //     height: height,
  //     wireframes: false,
  //     background: '#f5f5f5'
  //   }
  // });

  // Render.run(render);
  // Runner.run(Runner.create(), engine);

  // // Pastki yer (tubni yaratish)
  // const ground = Bodies.rectangle(width / 2, height, width, 20, { isStatic: true });
  // World.add(world, ground);

  // // Elementlarni yaratish
  // const elements = [
  //   Bodies.rectangle(100, 0, 120, 40, { restitution: 0.8, render: { fillStyle: '#ff4500' } }),
  //   Bodies.rectangle(300, 0, 150, 50, { restitution: 0.8, render: { fillStyle: '#ff6347' } }),
  //   Bodies.rectangle(500, 0, 100, 30, { restitution: 0.8, render: { fillStyle: '#ffa07a' } }),
  //   Bodies.rectangle(700, 0, 140, 40, { restitution: 0.8, render: { fillStyle: '#f08080' } }),
  //   Bodies.rectangle(900, 0, 130, 50, { restitution: 0.8, render: { fillStyle: '#ff8c00' } })
  // ];

  // World.add(world, elements);

  // // Kursor bilan elementlarni tortib harakatlantirish
  // const mouse = Mouse.create(render.canvas);
  // const mouseConstraint = MouseConstraint.create(engine, {
  //   mouse: mouse,
  //   constraint: {
  //     stiffness: 0.2,
  //     render: {
  //       visible: false
  //     }
  //   }
  // });

  // World.add(world, mouseConstraint);

  // // Har bir to'kilgan element bir-birining ustiga chiqmasdan tabiiy joylashadi.
  // // Elementlar gravitatsiya va elastiklik orqali tabiiy ravishda joylashadi.

  // const world = document.querySelector(".boops");
  // const { Engine, Render, Runner, World, Bodies } = Matter;

  // function createBall() {
  //   const ball = Bodies.circle(Math.round(Math.random() * 1280), -30, 25, {
  //     angle: Math.PI * (Math.random() * 2 - 1),
  //     friction: 0.001,
  //     frictionAir: 0.01,
  //     restitution: 0.8,
  //     render: {
  //       sprite: {
  //         texture: "https://static-cdn.jtvnw.net/emoticons/v1/301299185/2.0"
  //       }
  //     }
  //   });

  //   setTimeout(() => {
  //     World.remove(engine.world, ball);
  //   }, 30000);

  //   return ball;
  // }

  // const engine = Engine.create();
  // const runner = Runner.create();
  // const render = Render.create({
  //   canvas: world,
  //   engine: engine,
  //   options: {
  //     width: 1280,
  //     height: 720,
  //     background: "transparent",
  //     wireframes: false
  //   }
  // });

  // const boundaryOptions = {
  //   isStatic: true,
  //   render: {
  //     fillStyle: "transparent",
  //     strokeStyle: "transparent"
  //   }
  // };
  // const ground = Bodies.rectangle(640, 720, 1300, 4, boundaryOptions);
  // const leftWall = Bodies.rectangle(0, 360, 4, 740, boundaryOptions);
  // const rightWall = Bodies.rectangle(1280, 360, 4, 800, boundaryOptions);

  // Render.run(render);
  // Runner.run(runner, engine);

  // World.add(engine.world, [ground, leftWall, rightWall]);

  // const handleClick = () => {
  //   const ball2 = createBall();
  //   World.add(engine.world, [ball2]);
  // };

  // const button = document.querySelector("#boop");

  // button.addEventListener("click", handleClick);

})

// Matter.js elementlari
const { Engine, Render, Runner, World, Bodies } = Matter;
const worldElement = document.getElementById('world');

// Fizika dvigatelini yaratish
const engine = Engine.create();
const runner = Runner.create();
const render = Render.create({
    element: worldElement,
    engine: engine,
    options: {
        width: window.innerWidth,
        height: window.innerHeight,
        background: "transparent",
        wireframes: false
    }
});

Render.run(render);
Runner.run(runner, engine);

// To'siqlarni yaratish (pastki yer, chap va o'ng devorlar)
const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 10, { isStatic: true });
const leftWall = Bodies.rectangle(0, window.innerHeight / 2, 10, window.innerHeight, { isStatic: true });
const rightWall = Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 10, window.innerHeight, { isStatic: true });

World.add(engine.world, [ground, leftWall, rightWall]);

// Elementlarni yaratish funksiyasi
function createFallingElement(text) {
    const div = document.createElement('div');
    div.classList.add('falling-element');
    div.innerText = text;

    // Har bir elementning boshlang'ich pozitsiyasini random tarzda yaratamiz
    div.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    div.style.top = '-50px';

    worldElement.appendChild(div);

    // Matter.js obyektini yaratish (div ga asoslangan)
    const body = Bodies.rectangle(
        parseInt(div.style.left) + 50,  // X koordinatasi
        0,                             // Y koordinatasi
        100,                           // Element kengligi
        40,                            // Element balandligi
        {
            restitution: 0.8,          // Elastiklik
            friction: 0.001,
            render: {
                fillStyle: 'transparent'
            }
        }
    );

    World.add(engine.world, body);

    // Matter.js orqali pozitsiyani yangilash
    Matter.Events.on(engine, 'afterUpdate', function () {
        div.style.left = body.position.x - 50 + 'px';
        div.style.top = body.position.y - 20 + 'px';
        div.style.transform = `rotate(${body.angle}rad)`;
    });

    // Elementni 30 soniyadan keyin o'chirish
    setTimeout(() => {
        World.remove(engine.world, body);
        worldElement.removeChild(div);
    }, 30000);
}

// Barcha elementlarni avtomatik tushirish
const elements = ["Инвесторы", "Клиенты", "Идеи", "Партнерства", "Бизнес", "Инсайты"];
elements.forEach((text, index) => {
    setTimeout(() => createFallingElement(text), index * 1000);  // Har bir elementni 1 soniyadan keyin tushirish
});

