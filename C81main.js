canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
var color="Red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(400, 300, 50, 0, 2*Math.PI);
ctx.stroke();


canvas.addEventListener("mousedown", mousedown);
function mousedown(e){
    var x=e.clientX-canvas.offsetLeft;
    var y=e.clientY-canvas.offsetTop;
    console.log("x="+x);
    console.log("y="+y);
    circle(x, y);
}

function circle(x, y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=3;
    ctx.arc(x, y, 50, 0, 2*Math.PI);
    ctx.stroke();
}