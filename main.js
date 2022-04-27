var mouseevent="empty";
var last_position_x,last_position_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="blue"
line_width=2;
canvas.addEventListener("mousedown",My_mousedown);
function My_mousedown(e)
{
    mouseevent="mousedown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_position_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_mouse_y=e.clientY-canvas.offsetTop;
    if(mouseevent=="mousedown")
    {
        ctx.beginPath()
        ctx.strokeStyle=color;
        ctx.lineWidth=line_width;
        console.log("last position x & y")
        console.log("x="+last_position_x+"y="+last_position_y);
        ctx.moveTo(last_position_x,last_position_y);
        console.log("current position of x & y")
        console.log("x="+ current_position_mouse_x+"y="+current_position_mouse_y);
        ctx.lineTo(current_position_mouse_x,current_position_mouse_y);
        ctx.stroke();
    }
    last_position_x=current_position_mouse_x;
    last_position_y=current_position_mouse_y;
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseevent="mouseleave";
}
canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_up(e)
{
    mouseevent="mouseup";
}