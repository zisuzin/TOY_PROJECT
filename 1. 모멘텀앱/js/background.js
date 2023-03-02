const images = ["spain.jpg","switchland.jpg","tivet.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

// console.log(chosenImage);

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// console.log(bgImage);

document.body.appendChild(bgImage);