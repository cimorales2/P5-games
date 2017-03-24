function Character() {
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
    fill(255);
    ellipse(this.x,this.y,35,35)
  }
}

