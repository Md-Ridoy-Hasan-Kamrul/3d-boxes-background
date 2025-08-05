const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'));

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxesContainer.appendChild(box);
    }
  }
}

createBoxes();

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>3D Boxes Background</title>
//   <style>
//     body {
//       margin: 0;
//       background: #000;
//       overflow: hidden;
//       perspective: 1000px;
//     }
//     .box {
//       position: absolute;
//       width: 50px;
//       height: 50px;
//       background: rgba(255, 255, 255, 0.1);
//       border: 1px solid rgba(255, 255, 255, 0.2);
//       box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
//       transform-style: preserve-3d;
//       animation: rotateBox 10s linear infinite;
//     }
//     @keyframes rotateBox {
//       from {
//         transform: rotateX(0deg) rotateY(0deg) translateZ(0);
//       }
//       to {
//         transform: rotateX(360deg) rotateY(360deg) translateZ(0);
//       }
//     }
//   </style>
// </head>
// <body>
//   <script>
//     const createBoxes = () => {
//       const total = 100;
//       for (let i = 0; i < total; i++) {
//         const box = document.createElement('div');
//         box.className = 'box';
//         box.style.left = `${Math.random() * window.innerWidth}px`;
//         box.style.top = `${Math.random() * window.innerHeight}px`;
//         box.style.animationDuration = `${5 + Math.random() * 10}s`;
//         document.body.appendChild(box);
//       }
//     };

//     createBoxes();
//   </script>
// </body>
// </html>
