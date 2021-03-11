var socket;

function setup(){
    createCanvas(640, 480);
    background(51);
    socket = io.connect();
    socket.on('mouse', newDrawing);
}

function newDrawing(data){
    noStroke();
    fill(255);
    ellipse(data.x, data.y, 20, 20);
}

function mouseDragged(){
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 20, 20);

    var data = {
        x: mouseX,
        y: mouseY
    };
    socket.emit('mouse', data);
}

function draw(){
}