//var myFont = loadFont("assets/AllertaStencil-Regular.ttf");
let pieces = [];
let board;
let sel;
let ai;

function setup() {
    createCanvas(600, 600);
    //frameRate(10);
    pieces.push(new Piece(floor(Math.random()*19), 400, 400));
    pieces.push(new Piece(floor(Math.random()*19), 225, 400));
    pieces.push(new Piece(floor(Math.random()*19), 50, 400));
    repos();
    board = new Board();
    ai = new Brain(board);
    //ai.move(0, 0, 0);
    // console.log(ai.bestMove());
    // ai.move(1, 3, 3);
    // ai.move(2, 6, 6);
    //ai.move(0, 0, 7);
}

function repos() {
    for (var i=0; i<3; i++) {
        pieces[i].spawnX = pieces[i].x + (150 - pieces[i].w)/2;
        pieces[i].spawnY = pieces[i].y + (150 - pieces[i].h)/2;
        pieces[i].x = pieces[i].spawnX;
        pieces[i].y = pieces[i].spawnY;
        pieces[i].reinput();
    }
}

function draw() {
    background(255);
    stroke(0); fill(0);
    text(board.score, 500, 50);
    fill(100);
    rect(400, 400, 150, 150, 4);
    rect(225, 400, 150, 150, 4);
    rect(50, 400, 150, 150, 4);
    board.draw();
    for (var i=0; i<pieces.length; i++) {
        pieces[i].draw();
    }
    if (pieces[0].placed && pieces[1].placed && pieces[2].placed) {
        pieces = null; pieces = [];
        pieces.push(new Piece(floor(Math.random()*19), 400, 400));
        pieces.push(new Piece(floor(Math.random()*19), 225, 400));
        pieces.push(new Piece(floor(Math.random()*19), 50, 400));
        repos();
    }
    if (!board.lost && !board.canMv()) {board.lost = true; console.log("only " + board.score + "???");}
    if (!pieces[0].placed && !pieces[1].placed && ! pieces[2].placed) {ai.bestMove();}
}

function mousePressed() {
   var set;
   for (var i=0; i<pieces.length; i++) {
       for (var j=0; j<pieces[i].sqs.length; j++) {
           if (mouseX > pieces[i].sqs[j][0] && mouseX < pieces[i].sqs[j][0]+30 && mouseY > pieces[i].sqs[j][1] && mouseY < pieces[i].sqs[j][1] + 30) { /*console.log("here");*/ set = pieces[i];}
       }
   }
   if (set) { sel = set; sel.selected = true; sel.mousePressed();}
   //console.log(sel.x);
}

function mouseReleased() {
    sel.mouseReleased();
    //console.log(ai.corners(board.bools));
    //ai.whatDaHypDoin();
    //console.log(ai.bestMove());
}

function drawSq(x, y) {rect(x+2, y+2, 26, 26, 4);}
