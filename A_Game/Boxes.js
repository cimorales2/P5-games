function Box () {
  this.size = 20;
  this.x = random(this.size,width-this.size);
  this.y = random(this.size,height-this.size);
  
  this.show = function() {
    noStroke();
    fill(255);
    rect(this.x,this.y,this.size * 2,this.size * 2);
  }
  
  this.change_scene = function(scene) {
    if (scene == 0) {
      background(0);
      noLoop();
    } else if (scene == 1) {
      background(102);
      noLoop();
    } else {
      background(180);
      noLoop();
    }
  }
  
}