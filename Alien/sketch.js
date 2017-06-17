var ship;
var step2 = false;
var step3 = true;
var bg;
var lights = [];
var lights_off = true;
var it_1 = true;
var it = 1;
var colors = ['rgb(255,0,0)','rgb(0,255,0)','rgb(0,0,255)'];
var l_size = 0;
var light_size = 8;

function setup() {
  bg = loadImage("Objects/watermelon.jpg");
  createCanvas(1920,1080);
  frameRate(60);
  ship = new Ship();
  human = new Human();
}

function draw() {
  background(bg);
  human.show();
  ship.update();
  ship.show();
  if((step2) && (lights_off) && (step3)) {
    if(it_1) {
      delay(1000);
      for(var i=0; i<3; i++) {
        lights[i] = new Light(i-1,colors[i]);
      it_1 = false;
      }
    }
    
    for(var j=0; j<3; j++) {
      lights[j].resize();
      l_size = lights[j].size
    }
    
    if(l_size == light_size) {step3 = false;}
  
  } else if(step2) {
    for(var i = 0; i<3; i++) {
      lights[i].show();
    }
  }
}
