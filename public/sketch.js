var socket;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(233, 235, 238);
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