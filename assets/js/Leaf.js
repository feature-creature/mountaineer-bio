class Leaf {

  constructor(maxD, minD, x=random(width*0.42,width*0.58), y=random(height*0.4,height*0.9), summit = false ){
    this.max_dist = maxD;
    this.min_dist = minD;
    this.pos = createVector(x,y);
    this.reached = false;
    this.summit = summit;
  }

  show( ){
    push();
    strokeWeight(1);
    noStroke();
    fill(0,20)
    //fill(255,0,0)
    circle(this.pos.x, this.pos.y, 3);
    /*
    noFill();
    stroke(0,1)
    circle(this.pos.x , this.pos.y, min_dist*2);
    circle(this.pos.x , this.pos.y, max_dist*2);
    */
    pop();
  }

}

