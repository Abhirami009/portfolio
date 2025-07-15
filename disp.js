// let balls = []; let num = 10;

// function setup() {
// //   createCanvas(700, 400);
// let canvas = createCanvas(windowWidth, windowHeight);
  
//   // Give the canvas an ID for CSS styling and place it in the body
//   canvas.id('p5-background');
  
//   for (let i=0; i<num; i++) {
//     let x = random(width);
//     let y = random(height);
//     let r = random(200, 400);
//     balls[i] = new Glowy(x, y, r);
//   }
  
// }

// function draw() {
//   background(0);
  
//   for (let i=0; i<num; i++) {
//     balls[i].update();
//     balls[i].display();
//   }
  
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }


const sketch = (p) => {
    let balls = [];
    let num = 2;

    p.setup = function() {
        let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.id('p5-background');

        for (let i = 0; i < num; i++) {
            let x = p.random(p.width);
            let y = p.random(p.height);
            let r = p.random(200, 400);
            // Pass the p5 instance 'p' to the Glowy constructor
            balls[i] = new Glowy(p, x, y, r);
        }
    };

    p.draw = function() {
        p.background(0);

        for (let i = 0; i < num; i++) {
            balls[i].update();
            balls[i].display();
        }
    };

    p.windowResized = function() {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
};

// Create a new p5 instance and attach it to the body
new p5(sketch, document.body);