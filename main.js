var color = "black"
var width_of_line = 1

var mouseEvent = "empty"
var  last_x , last_y 

canvas = document.getElementById("my_canvas")
ctx = canvas.getContext("2d")

canvas.addEventListener("mousedown", mousedownn)

function mousedownn(e) {
mouseEvent = "abcd"
color = document.getElementById("textinput").value;
width_of_line = document.getElementById("widthofline").value;
}


canvas.addEventListener("mouseup" , mouseupp)

function mouseupp (e){
    mouseEvent = "HHHH"
}

canvas.addEventListener("mouseleave" , mouseleavee)

function mouseleavee (e) {
    mouseEvent = "efgh"
}


canvas.addEventListener("mousemove" , mousemovee)

function mousemovee (e) {
    var currentx = e.clientX - canvas.offsetLeft
    var currenty = e.clientY - canvas.offsetTop
          
    if(mouseEvent == "abcd") {

        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = width_of_line

        ctx.moveTo(last_x , last_y)
        ctx.lineTo(currentx , currenty)

        ctx.stroke()
    }

    last_x = currentx
    last_y = currenty 
       
}






