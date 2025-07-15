// // const sketch = (p) => {
// //     let particles = [];
// //     let num = 5000;
// //     let m = 5; let n = 4; let threshold = 0.05;


// //     p.setup = function() {
// //         let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
// //         canvas.id('p5-background');

// //         for (let i = 0; i < num; i++) {
// //             particles.push(new Particle());
// //             // Pass the p5 instance 'p' to the Glowy constructor
// //             // balls[i] = new Glowy(p, x, y, r);
// //         }
// //     };

// //     p.draw = function() {
// //         p.background(0);

// //         for (let i = 0; i < num; i++) {
// //             particles[i].update();
// //             particles[i].display();
// //         }
// //     };

// //     p.windowResized = function() {
// //         p.resizeCanvas(p.windowWidth, p.windowHeight);
// //     };

// //     p.chladni = function(x,y){
// //         let L = 1;
// //         return cos(n * PI * x/L) * cos(m * PI * y / L) * cos(m * PI * y/L) * cos(n * PI * y / L);
// //     }
// // };

// // // Create a new p5 instance and attach it to the body
// // new p5(sketch, document.body);


// const sketch = (p) => {
//     let particles = [];
//     const num = 2000;
    
//     // Chladni pattern parameters
//     const m = 5; 
//     const n = 1; 
//     const threshold = 0.01;

//     // Define boundary and scaling constants
//     let constants = {};

//     p.setup = function() {
//         let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
//         canvas.id('p5-background');


//         // Set constants based on canvas size
//         constants = {
//             w1: 0,
//             w2: p.width,
//             h1: 0,
//             h2: p.height,
//             threshold: threshold
//         };

//         // m = this.random(1,6);
//         // n = this.random(1,6);

//         // if (m === n)
//         //     m = this.random(1,6);

//        m = p.floor(p.random(1, 7));
//         n = p.floor(p.random(1, 7));

//         particles = []; // Clear array on resize
//         for (let i = 0; i < num; i++) {
//             // Pass the p5 instance 'p' and the constants object
//             particles.push(new Particle(p, constants));
//         }
//     };



//     p.draw = function() {
//         p.background(0); // Use a low-opacity background for a trail effect

//         for (let i = 0; i < particles.length; i++) {
//             particles[i].update();
//             particles[i].display();
//         }
//     };
    
//     // The chladni function is a method of the sketch instance 'p'
//     p.chladni = function(x, y) {
//         // More standard Chladni plate equation
//         let term1 = p.cos(p.PI * n * x / 2) * p.cos(p.PI * m * y / 2);
//         let term2 = p.cos(p.PI * m * x / 2) * p.cos(p.PI * n * y / 2);
//         return term1 - term2;
//     };

//     p.mousePressed = function() {
//         // Calling setup() again will re-run the entire initialization process,
//         // including picking new random m and n values.
//         p.setup();
//     }

//     p.windowResized = function() {
//         p.resizeCanvas(p.windowWidth, p.windowHeight);
//         // Re-run setup to regenerate particles for the new size
//         p.setup();
//     };
// };

// // Create a new p5 instance and attach it to the body
// new p5(sketch, document.body);



const sketch = (p) => {
    let particles = [];
    const num = 2000;
    
    // Declare m and n, but don't assign them yet.
    let m; 
    let n; 
    const threshold = 0.01;

    // Define boundary and scaling constants
    let constants = {};

    p.setup = function() {
        let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.id('p5-background');

        // *** CHANGE: Assign random integer values to m and n ***
        // p.random(1, 7) gives a float from 1 up to (but not including) 7.
        // p.floor() rounds it down to the nearest whole number (1, 2, 3, 4, 5, or 6).
        m = p.floor(p.random(1, 7));
        n = p.floor(p.random(1, 7));

        // Optional: Log the new values to the console to see what they are.
        console.log(`New pattern: m = ${m}, n = ${n}`);

        // Set constants based on canvas size
        constants = {
            w1: 0,
            w2: p.width,
            h1: 0,
            h2: p.height,
            threshold: threshold
        };

        particles = []; // Clear array for new pattern
        for (let i = 0; i < num; i++) {
            // Pass the p5 instance 'p' and the constants object
            particles.push(new Particle(p, constants));
        }
    };

    p.draw = function() {
        p.background(0); // Use a low-opacity background for a trail effect

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].display();
        }
    };
    
    p.chladni = function(x, y) {
        // The m and n values assigned in setup() will be used here.
        let term1 = p.cos(p.PI * n * x / 2) * p.cos(p.PI * m * y / 2);
        let term2 = p.cos(p.PI * m * x / 2) * p.cos(p.PI * n * y / 2);
        return term1 - term2;
    };

    // *** NEW FEATURE: Click the mouse to generate a new pattern ***
    p.mousePressed = function() {
        // Calling setup() again will re-run the entire initialization process,
        // including picking new random m and n values.
        p.setup();
    }

    p.windowResized = function() {
        // The existing resize function already calls setup, so it will also
        // generate a new pattern, which is great!
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        p.setup();
    };
};

// Create a new p5 instance and attach it to the body
new p5(sketch, document.body);