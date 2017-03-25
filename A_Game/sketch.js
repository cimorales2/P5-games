var pj;
var scene = 0;
var boxes = [];
var col = 51;

function setup() {
  createCanvas(600,600);
  noCursor();
  pj = new Character();
  for (var i = 0; i < 3; i ++) {
    boxes[i] = new Box();
  }
  
}

function draw() {
 background(51);
 for (var i = 0; i < boxes.length; i++) {
   boxes[i].show();
 }
 pj.update();
 pj.show();
 check_hit();
}

function check_hit() {
  for (var i = 0; i < boxes.length; i ++) {
    var d = dist(pj.x,pj.y,boxes[i].x,boxes[i].y);
    if (d < pj.r + boxes[i].size) {
      boxes[i].change_scene(scene);
      boxes.splice(i,1);
    }
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    loop();
    scene += 1;
  }
}