var socket;
var canvas;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
    socket = io.connect();
    socket.on('mouse', newDrawing);
}

function newDrawing(data){
    noStroke();
    fill(31, 255, 212);
    ellipse(data.x, data.y, 20, 20);
}

function mouseDragged(){
    noStroke();
    fill(31, 255, 212);
    ellipse(mouseX, mouseY, 20, 20);

    var data = {
        x: mouseX,
        y: mouseY
    };
    socket.emit('mouse', data);
}

function draw(){
}