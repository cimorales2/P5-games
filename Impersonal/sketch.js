var bg;
var m;
var s;

function preload() {
  bg = loadImage('images/ARI0.jpg');
}

function setup(){
  createCanvas(1350,800);
  m = new moon();
}

function draw() {
  background(bg);
  m.show();
  m.mouseIn();
}

function moon() {
  this.x = 940;
  this.y = 400;
  this.r = 330;
  this.off = 292;
  
  this.show = function() {
    noFill();
    noStroke();
    ellipse(this.x,this.y,this.r * 2, this.r *2);
  }
  
  this.mouseIn = function() {
    var d = dist(mouseX,mouseY,this.x,this.y);
    if (d < this.r) {
      //background(255);
      s = 'Autorretrato de Cristobal Morales Reveco';
      textSize(32);
      fill(0);
      text(s,this.x-this.off,this.y);
      //noLoop();
    } 
  }
}