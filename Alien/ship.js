function Ship () {
  this.img = loadImage("Objects/ufo.png");
  this.size = 100;
  this.x = width/2 + 50;
  this.y = this.size + 4;

  this.show = function() {
    push();
    imageMode(CENTER);
    image(this.img,this.x,this.y,this.size*2,this.size*1.3);
    pop();
  }
  
  this.update = function() {
    var L = 3*height/4;
    if((this.y >= L) && (this.x == width/2+50)) {
      step2 = true;
    } else if (step2 === false) {
      this.y += 2;
      this.x = 100*cos(7*radians(90*this.y/L)) + width/2 + 50;
      this.size = this.size*1.004
    }
  }
}