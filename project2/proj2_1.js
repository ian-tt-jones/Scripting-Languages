function drawSquare(x, y, length, level, context){
    if (level < 4){
        context.fillStyle = "rgba(0,0,0,1)";
        if (level == 1){
            context.fillStyle = "rgba(150,0,0,1)";
        }
        else if (level == 2){
            context.fillStyle = "rgba(0,150,0,1)";
        }
            else if (level == 3){
            context.fillStyle = "rgba(0,0,150,1)";
            }
        else{
            context.fillStyle = "rgba(50,50,50,1)";
        }
        context.fillRect(x,y,length, length);
        level += 1;
        length = length/2;
        x += length/2;
        drawSquare(x,y,length, level,context);
    }
}

function drawBranch(x, y, angle, len, level, context) {
    var maxLevels = 7;  
    if (level < maxLevels) {
        var rad = angle * (Math.PI / 180);
        var newx = x + len * Math.cos(rad);
        var newy = y + len * Math.sin(rad);

        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(newx, newy);
        context.stroke();

        drawBranch(newx, newy, angle, len / 2, level + 1, context);
        drawBranch(newx, newy, angle + 90, len / 2, level + 1, context);
        drawBranch(newx, newy, angle - 90, len / 2, level + 1, context);
    }
}

$(document).ready(function(){
    var c = document.getElementById("myCanvas");
    var context = c.getContext("2d");
    var x = c.width / 2;
    var y = c.height / 2;
    // var length = 200;
    // var level = 0;
    // drawSquare(x,y,length, level, context);
    drawBranch(x, y, 0, 100, 0, context);
    drawBranch(x, y, 90, 100, 0, context);
    drawBranch(x, y, -90, 100, 0, context);
    drawBranch(x, y, 180, 100, 0, context);
    drawBranch(x, y, 0, 50, 0, context);
    drawBranch(x, y, 90, 50, 0, context);
    drawBranch(x, y, -90, 50, 0, context);
    drawBranch(x, y, 180, 50, 0, context);
    drawBranch(x, y, 0, 25, 0, context);
    drawBranch(x, y, 90, 25, 0, context);
    drawBranch(x, y, -90, 25, 0, context);
    drawBranch(x, y, 180, 25, 0, context);
    drawBranch(x, y, 0, 75, 0, context);
    drawBranch(x, y, 90, 75, 0, context);
    drawBranch(x, y, -90, 75, 0, context);
    drawBranch(x, y, 180, 75, 0, context);
})