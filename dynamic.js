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
  c1 = color("rgb(9, 40, 54)");   // Dark Teal
  c2 = color("rgb(214, 236, 246)"); // Peach
  c3 = color("rgb(235, 229, 153)"); // Coral
  c4 = color("rgb(230, 104, 197)");   // Lighter Teal
}

function draw() {
  // Use Perlin noise to get smooth, non-repeating values between 0 and 1
  let noise1 = noise(xoff1);
  let noise2 = noise(xoff2);

  let topColor = lerpColor(c1, c2, noise1);
  let bottomColor = lerpColor(c3, c4, noise2);

  // Draw the vertical gradient
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(topColor, bottomColor, inter);
    stroke(c);
    line(0, y, width, y);
  }

  // Increment the noise offsets to animate the gradient
  xoff1 += 0.005;
  xoff2 += 0.007;
}

// Make sure the canvas resizes when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}