function Light(i,c) {
  this.size = 0;
  this.x = ship.x + (i*ship.size/3) + i*80;
  this.y = ship.y-50;
  this.col = c;
  
  this.show = function() {
    fill(this.col); //rectMode in down left corner
    push();
    rectMode(CORNERS);
    rect(this.x+15,this.y+light_size/2,this.x-15,this.y-this.size-light_size/2);
    pop();
  }
  
  this.resize = function() {
    this.size+=0.5;
    this.show();
  }
}