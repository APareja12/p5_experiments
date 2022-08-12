const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



// canvas.addEventListener('click', function (e) {
    
ctx.beginPath();
ctx.rect(100, 100, 100, 100);
ctx.fill();
// });

// const degToRad = (deg) =>{
//     return deg /180 * Math.PI;
// }

// ctx.beginPath();
// ctx.arc(100, 100, 50, 100, degToRad(180));
// ctx.stroke();


