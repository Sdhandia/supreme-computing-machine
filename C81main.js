canvas=document.getElementById("canva1");
ctx=canvas.getContext("2d");
color="aqua";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(200,200,70,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mouseDouwn);
function my_mouseDouwn(e){
    console.log("insidemousedown");
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop; 
    circle(mouse_x,mouse_y);
    console.log(mouse_x);
console.log(mouse_y);
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(mouse_x,mouse_y,70,0,2*Math.PI);
ctx.stroke();
console.log(mouse_x);
console.log(mouse_y);

}
function clearArea() {
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     }