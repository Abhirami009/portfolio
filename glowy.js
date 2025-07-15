// class Glowy{

//     constructor(x, y, radius){
//         this.pos = createVector(x,y);
//         this.vel = p5.vector.random2D().mult(random(2,5));
//         this.radius = radius;
//         this.ctx = drawingContext;
//         this.c = this.getPastelColor();
//     }

//     getPastelColor(){
//         let r = random(150, 255);
//         let g = random(150, 255);
//         let b = random(150, 255);
//         return color(r, g, b);
//     }

//     update(){
//         this.pos.add(this.vel);

//         if (this.pos.x > width ){
//             this.vel.x *= -1;
//             this.pos.x = width;
//         }
//         else if (this.pos.x < 0){
//             this.vel.x *= -1;
//             this.pos.x = 0;
//         }
         
//         if (this.pos.y > height){
//             this.vel.y *= -1;
//             this.pos.y = height;
//         }
//         else if (this.pos.y < 0){
//             this.vel.y *= -1;
//             this.pos.y = 0;
//         }

//     }

//     display(){
//         gradient = this.ctx.createRadialGradient(this.pos.x, this.pos.y, 0, this.pos.x, this.pos.y, this.radius);

//         let r = this.c.r;
//         let g = this.c.g;
//         let b = this.c.b;

//         gradient.addColorStop(0,`rgba(${r}, ${g}, ${b}, 1)` );
//         gradient.addColorStop(1,`rgba(${r}, ${g}, ${b}, 0)` );

//         this.ctx.fillSyle = gradient;

//         noStroke();
//         ellipse(this.pos.x, this.pos.y, this.radius * 2, this.radius * 2);
//     }
// }


class Glowy {
    constructor(p, x, y, radius) {
        this.p = p; // Store the p5 instance
        this.pos = this.p.createVector(x, y);
        this.vel = p5.Vector.random2D().mult(this.p.random(2, 5));
        this.radius = radius;
        this.ctx = this.p.drawingContext;
        this.c = this.getPastelColor();
    }

    getPastelColor() {
        let r = this.p.random(150, 255);
        let g = this.p.random(150, 255);
        let b = this.p.random(150, 255);
        return this.p.color(r, g, b);
    }

    update() {
        this.pos.add(this.vel);

        if (this.pos.x > this.p.width || this.pos.x < 0) {
            this.vel.x *= -1;
        }
        if (this.pos.y > this.p.height || this.pos.y < 0) {
            this.vel.y *= -1;
        }
    }

    display() {
        let gradient = this.ctx.createRadialGradient(this.pos.x, this.pos.y, 0, this.pos.x, this.pos.y, this.radius);

        let r = this.p.red(this.c);
        let g = this.p.green(this.c);
        let b = this.p.blue(this.c);

        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 1)`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        this.ctx.fillStyle = gradient;

        this.p.noStroke();
        // Use a native canvas function to draw the shape with the gradient
        this.ctx.beginPath();
        this.ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}