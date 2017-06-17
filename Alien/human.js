function Human() {
  this.img = loadImage("Objects/h_up.png")
  this.size = 300;
  this.x = 150;
  this.y = width/2 -100;
  
  this.show = function() {
    push();
    imageMode(CENTER)
    image(this.img,this.x,this.y,this.size*1.5,this.size);
    pop();
  }
}