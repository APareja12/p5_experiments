const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



// canvas.addEventListener('click', function (e) {
    
// ctx.beginPath();
// ctx.rect(e.x, e.y, 10, 10);
// ctx.fill();
// });

// const degToRad = (deg) =>{
//     return deg /180 * Math.PI;
// }

// ctx.beginPath();
// ctx.arc(100, 100, 50, 0, degToRad(180));
// ctx.fill();



canvas.addEventListener('click', function(e){
        for (let i = 0; i < 20; i++) {
               atoms.push(new Atom(e.x, e.y));
                // console.log("hello");
            }
        });
        
let atoms = [];

const animate = () => {
    atoms.forEach((atom, index) => {
    ctx.fillStyle = 'white'
        atom.draw();
        atom.updateSpeed(); 
        atom.updateSize(); 

        if (atom.radius < 0.3){
            atoms.splice(index, 1);
        }
});
    ctx.save();
    ctx.fillStyle = 'rgba(240,0,0,0.2';
    ctx.fillRect(0,0,canvas.width, canvas.height);
    ctx.restore();
    requestAnimationFrame(animate);
}


animate();

class Atom {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 5 + 2;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
    }
    updateSpeed(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

    updateSize(){
        this.radius -= 0.1;
        // this.x += this.speedX;
        // this.y += this.speedY;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2)
        ctx.fill();
    }
}

// const point = {
//     x: 0,
//     y: 0,
// }

// let degree= 0;
// const generateAtoms = () => {
//     atoms.push(new Atom(canvas.width/2 +(point.x * 200), 
//     canvas.height/2 + (point.y * 200)));
//     point.x = Math.cos(degree / 180 * Math.PI);
//     point.y = point.x * point.x;

//     degree++;
//     requestAnimationFrame(generateAtoms);
// }

// generateAtoms();

// Math.random()* canvas.width, Math.random() * canvas.height

