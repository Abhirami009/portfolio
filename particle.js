// class Particle {
//   constructor(p) {
//     this.position = this.p.createVector(random(w1, w2), random(h1, h2));
//     this.velocity = p5.Vector.random2D();
//     this.acceleration = this.p.createVector();
    
//     this.maxSpeed = 2; 
//     this.maxForce = 0.1;
//   }
  
//   edges() {
//     if (this.position.x > w2) {
//       this.position.x = w1;
//     } else if (this.position.x < w1) {
//       this.position.x = w2;
//     }
    
//     if (this.position.y > h2) {
//       this.position.y = h1;
//     } else if (this.position.y < h1) {
//       this.position.y = h2;
//     }
    
//   }
  
//   seek() {
//     let x = this.p.map(this.position.x, w1, w2, -1, 1) * scl;
//     let y = this.p.map(this.position.y, h1, h2, -1, 1) * scl;
//     let val = this.p.chladni(x, y); 
    
//     let target = this.position.copy();

//     if (abs(val) > threshold) {
//       target.x += this.p.random(-3, 3);
//       target.y += this.p.random(-3, 3);
//     } 
    
//     let desired = p5.Vector.sub(target, this.position);
//     desired.setMag(this.maxSpeed);
//     let steering = p5.Vector.sub(desired, this.velocity);
//     steering.limit(this.maxForce);
    
//     return steering;
//   }
  
//   update() {
//     this.edges();
    
//     this.acceleration.add(this.seek());
//     this.velocity.add(this.acceleration);
//     this.velocity.limit(this.maxSpeed);
//     this.position.add(this.velocity);
//     this.acceleration.mult(0);
//   }
  
//   display() {
//     stroke(255);
//     point(this.position.x, this.position.y);
//   }
// }


class Particle {
  constructor(p, constants) {
    // Store the p5 instance
    this.p = p;
    
    // Store constants passed from the main sketch
    this.constants = constants;

    // Use the stored p instance to call p5 functions
    this.position = this.p.createVector(this.p.random(this.constants.w1, this.constants.w2), this.p.random(this.constants.h1, this.constants.h2));
    this.velocity = p5.Vector.random2D(); // This static call is often okay, but this.p.constructor.Vector is safer
    this.acceleration = this.p.createVector();
    
    this.maxSpeed = 2; 
    this.maxForce = 0.1;
  }
  
  edges() {
    if (this.position.x > this.constants.w2) this.position.x = this.constants.w1;
    if (this.position.x < this.constants.w1) this.position.x = this.constants.w2;
    if (this.position.y > this.constants.h2) this.position.y = this.constants.h1;
    if (this.position.y < this.constants.h1) this.position.y = this.constants.h2;
  }
  
  seek() {
    // Map particle position to the coordinate system of the chladni function
    let x = this.p.map(this.position.x, this.constants.w1, this.constants.w2, -1, 1);
    let y = this.p.map(this.position.y, this.constants.h1, this.constants.h2, -1, 1);
    
    // Call the chladni function from the main sketch instance
    let val = this.p.chladni(x, y); 
    
    let target = this.position.copy();

    // If the particle is in a "calm" area, make it jitter to find a new spot
    if (this.p.abs(val) > this.constants.threshold) {
      target.x += this.p.random(-3, 3);
      target.y += this.p.random(-3, 3);
    } 
    
    // Calculate steering force
    let desired = p5.Vector.sub(target, this.position);
    desired.setMag(this.maxSpeed);
    let steering = p5.Vector.sub(desired, this.velocity);
    steering.limit(this.maxForce);
    
    return steering;
  }
  
  update() {
    this.edges();
    
    this.acceleration.add(this.seek());
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }
  
  display() {
    this.p.stroke(this.p.random(150, 255));
    this.p.strokeWeight(1.5);
    this.p.point(this.position.x, this.position.y);
  }
}