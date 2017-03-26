function Box () {
  this.size = 20;
  this.x = random(this.size,width-this.size);
  this.y = random(this.size,height-this.size);
  
  this.show = function() {
    noStroke();
    fill(255);
    rect(this.x,this.y,this.size * 2,this.size * 2);
  }
  
  this.change_scene = function(scene,bgs) {
    if (scene == 0) {
      background(bgs[0]);
      noLoop();
    } else if (scene == 1) {
      background(bgs[1]);
      noLoop();
    } else {
      background(bgs[2]);
      noLoop();
    }
  }
  
}