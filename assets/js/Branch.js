
class Branch {

  constructor(parent, pos, dir, bLength){
    this.pos = pos;
    this.parent = parent;
    this.dir = dir;
    this.origDir = this.dir.copy();
    this.count = 0;
    this.len = bLength;
  }

  reset( ){
    this.dir = this.origDir.copy();
    this.count = 0;
  }

  next() {
    let nextDir = p5.Vector.mult( this.dir, this.len );
    let nextPos = p5.Vector.add( this.pos, nextDir );
    let nextBranch = new Branch( this, nextPos, this.dir.copy(), this.len );
    return nextBranch;
  }

  show() {
    if( this.parent != null ){
      push();
      stroke(0,50);
      strokeWeight(1);
      line( this.pos.x, this.pos.y, this.parent.pos.x, this.parent.pos.y );
      pop();
    }
  }
}

