var pj;
var scene = 0;
var boxes = [];
var bgs = [];

function preload() {
  for (var i = 0; i < 4; i++) {
    bgs[i] = loadImage('images/ARP' + i + '.png');
  }
}

function setup() {
  createCanvas(1350,700);
  noCursor();
  pj = new Character();
  for (var i = 0; i < 3; i++) {
    boxes[i] = new Box();
  }
  
}

function draw() {
 if (scene == 3) {
   background(bgs[3]);
 } else {
   background(51);
   for (var i = 0; i < boxes.length; i++) {
     boxes[i].show();
   }
   pj.update();
   pj.show();
   check_hit();
 }
}

function check_hit() {
  for (var i = 0; i < boxes.length; i ++) {
    var d = dist(pj.x,pj.y,boxes[i].x,boxes[i].y);
    if (d < 0.9*(pj.r + boxes[i].size)) {
      boxes[i].change_scene(scene,bgs);
      boxes.splice(i,1);
    }
  }
}

function keyPressed() {
  if (keyCode === ENTER && scene != 3) {
    loop();
    scene += 1;
  }
}