function Alien(X,Vx,Vy) {
  //this.img =
  this.d1 = 0;
  this.size = 10;
  this.x = ship.x + X;
  this.y = ship.y;
  this.vx = Vx;
  this.vy = Vy;
  
  this.show = function() {
    noStroke();
    fill(255);
    rectMode(CENTER);
    rect(this.x,this.y,this.size,this.size);
  }
  
  this.update = function() {
    if(step2 == false) {
      this.y = ship.y;
      this.x = ship.x+X;
      this.d1 = this.y + 45;
    } else if ((step2 == true) && (this.y<this.d1)) {
      this.y += 0.2;
      this.d1 -= 0.2;
    } else if ((this.d1 <= this.y) && (this.y < human.y)) {
      this.x += this.vx;
      this.y += this.vy;
    } else if (this.y == human.y) {
      rect(this.x,this.y,this.size,this.size)
    } 
  }
}