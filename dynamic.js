// dynamic.js

let c1, c2, c3, c4;
let xoff1 = 0;
let xoff2 = 1000;

function setup() {
  // Create a canvas that fills the browser window
  let canvas = createCanvas(windowWidth, windowHeight);
  
  // Give the canvas an ID for CSS styling and place it in the body
  canvas.id('p5-background');
  
  noStroke();

  // Define the colors for the gradient
  c1 = color("rgb(22, 48, 4)");   // Dark Teal
  c2 = color("rgb(229, 73, 117)"); // Peach
  c3 = color("rgb(0, 5, 7)"); // Coral
  c4 = color("rgb(16, 26, 2)");   // Lighter Teal
}

function draw() {
  // Use Perlin noise to get smooth, non-repeating values between 0 and 1
  let noise1 = noise(xoff1);
  let noise2 = noise(xoff2);

  let r = random(255);
  let g = random(255);
  let b = random(255);

   let randomColor = color(r, g, b);

  // let topColor = lerpColor(c1, c2, noise1);
  let topColor = randomColor;
  // let bottomColor = lerpColor(c3, c4, noise2);
  r = random(255);
  g = random(255);
  b = random(255);
  let bottomColor = color(r,g,b); 

  // Draw the vertical gradient
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(topColor, bottomColor, inter);
    stroke(c);
    line(0, y, width, y);
  }

  // Increment the noise offsets to animate the gradient
  xoff1 += 0.004;
  xoff2 += 0.005;
}

// Make sure the canvas resizes when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}