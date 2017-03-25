function Character() {
  this.r = 17;
  this.x = width/2;
  this.y = height/2;
  this.targetX = mouseX;
  this.targetY = mouseY;
  this.dx = 0;
  this.dy = 0;
  this.easing = 0.1;
  
  this.update = function() {
    this.targetX = mouseX;
    this.dx = this.targetX - this.x;
    this.x += this.dx * this.easing;
    
    this.targetY = mouseY;
    this.dy = this.targetY - this.y;
    this.y += this.dy * this.easing;
  }
  
  this.show = function() {
    stroke('rgb(0,255,0)');
    fill(255);
    ellipse(this.x,this.y,this.r * 2,this.r * 2)
  }
}

