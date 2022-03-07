class Tree {

  constructor( numLeaves, maxD, minD, bLength ){

    this.leaves = [];
    this.branches = [];

    // create leaves
    for( let i = 0; i < numLeaves; i++ ){
      this.leaves.push( new Leaf( maxD, minD) );
    }
    // summit
    this.leaves.push( new Leaf( maxD, minD, width*0.17, height*0.63, true) );
    this.leaves.push( new Leaf( maxD, minD, width*0.19, height*0.64, true) );
    this.leaves.push( new Leaf( maxD, minD, width*0.21, height*0.66, true) );
    this.leaves.push( new Leaf( maxD, minD, width*0.24, height*0.66, true) );
    this.leaves.push( new Leaf( maxD, minD, width*0.28, height*0.65, true) );
    this.leaves.push( new Leaf( maxD, minD, width*0.31, height*0.63, true) );
    this.leaves.push( new Leaf( maxD, minD, width*0.33, height*0.61, true) );
    this.leaves.push( new Leaf( maxD, minD, width*0.36, height*0.58, true) );
    this.leaves.push( new Leaf( maxD, minD, width*0.38, height*0.54, true) );
    this.leaves.push( new Leaf( maxD, minD, width*0.523, height*0.18, true) );
    this.leaves.push( new Leaf( maxD, minD, width*0.41, height*0.47, false) );
    this.leaves.push( new Leaf( maxD, minD, width*0.42, height*0.43, false) );
    this.leaves.push( new Leaf( maxD, minD, width*0.433, height*0.38, false) );
    this.leaves.push( new Leaf( maxD, minD, width*0.45, height*0.34, false) );
    this.leaves.push( new Leaf( maxD, minD, width*0.48, height*0.28, false) );
    this.leaves.push( new Leaf( maxD, minD, width*0.48, height*0.27, false) );
    this.leaves.push( new Leaf( maxD, minD, width*0.49, height*0.26, false) );
    this.leaves.push( new Leaf( maxD, minD, width*0.5, height*0.22, false) );

      /*
    this.leaves.push( new Leaf( maxD, minD, width*0.35, height*0.9) );
    this.leaves.push( new Leaf( maxD, minD, width*0.4, height*0.9) );
    this.leaves.push( new Leaf( maxD, minD, width*0.45, height*0.88) );
    this.leaves.push( new Leaf( maxD, minD, width*0.5, height*0.9) );
    this.leaves.push( new Leaf( maxD, minD, width*0.58, height*0.94) );
    this.leaves.push( new Leaf( maxD, minD, width*0.65, height*0.9) );
    this.leaves.push( new Leaf( maxD, minD, width*0.68, height*0.87) );
    this.leaves.push( new Leaf( maxD, minD, width*0.70, height*0.85) );
    this.leaves.push( new Leaf( maxD, minD, width*0.71, height*0.8) );
    this.leaves.push( new Leaf( maxD, minD, width*0.67, height*0.74) );
    this.leaves.push( new Leaf( maxD, minD, width*0.63, height*0.66) );
    this.leaves.push( new Leaf( maxD, minD, width*0.6, height*0.6) );
    this.leaves.push( new Leaf( maxD, minD, width*0.58, height*0.5) );
    this.leaves.push( new Leaf( maxD, minD, width*0.56, height*0.43) );
    this.leaves.push( new Leaf( maxD, minD, width*0.56, height*0.37) );
    this.leaves.push( new Leaf( maxD, minD, width*0.55, height*0.32) );
    this.leaves.push( new Leaf( maxD, minD, width*0.535, height*0.24) );

    this.leaves.push( new Leaf( maxD, minD, width*0.72, height*0.8) );
    this.leaves.push( new Leaf( maxD, minD, width*0.74, height*0.64) );
    this.leaves.push( new Leaf( maxD, minD, width*0.76, height*0.68) );
    this.leaves.push( new Leaf( maxD, minD, width*0.75, height*0.73) );
    this.leaves.push( new Leaf( maxD, minD, width*0.78, height*0.7) );
    this.leaves.push( new Leaf( maxD, minD, width*0.7, height*0.6) );
    this.leaves.push( new Leaf( maxD, minD, width*0.67, height*0.55) );
    this.leaves.push( new Leaf( maxD, minD, width*0.62, height*0.45) );
    this.leaves.push( new Leaf( maxD, minD, width*0.59, height*0.4) );
    this.leaves.push( new Leaf( maxD, minD, width*0.56, height*0.3) );
      /*

      /*
    //this.leaves.push( new Leaf( maxD, minD, width*0.5, height*0.23) );
    this.leaves.push( new Leaf( maxD, minD, width*0.48, height*0.27) );
    this.leaves.push( new Leaf( maxD, minD, width*0.47, height*0.32) );
    this.leaves.push( new Leaf( maxD, minD, width*0.465, height*0.35) );
    this.leaves.push( new Leaf( maxD, minD, width*0.46, height*0.35) );
    this.leaves.push( new Leaf( maxD, minD, width*0.46, height*0.45) );
    this.leaves.push( new Leaf( maxD, minD, width*0.46, height*0.5) );

    this.leaves.push( new Leaf( maxD, minD, width*0.45, height*0.68) );
    this.leaves.push( new Leaf( maxD, minD, width*0.35, height*0.68) );
    this.leaves.push( new Leaf( maxD, minD, width*0.34, height*0.78) );
    this.leaves.push( new Leaf( maxD, minD, width*0.34, height*0.88) );
    this.leaves.push( new Leaf( maxD, minD, width*0.35, height*0.86) );
    */

    // create a root branch
    //let pos = createVector(width*0.30, height*0.88);
    let pos = createVector(width*0.13, height*0.62);
    let dir = createVector(0, -1);
    let root = new Branch(null, pos, dir, bLength);
    let current = root;
    this.branches.push(root);

    // this could probably be rewritten
    let found = false;
    while( !found ){
      // has the root found a leaf?
      for( let i = 0; i < this.leaves.length; i++ ){
        // could reference branches instead
        let d = p5.Vector.dist( current.pos, this.leaves[i].pos );
        if (d < this.leaves[i].max_dist) {
          found = true;
        }
      }
      // add a branch
      if (!found) {
        var branch = current.next();
        current = branch;
        this.branches.push(current);
      }
    }

  }


  grow( ){
    for( let i = 0; i < this.leaves.length; i++ ){
      let leaf = this.leaves[i];
      let closestBranch = null;
      let record = leaf.max_dist;
      for( let j = 0; j < this.branches.length; j++ ){
        let branch = this.branches[j];
        let d = p5.Vector.dist( leaf.pos, branch.pos );
        if( d < leaf.min_dist ){
          leaf.reached = true;
          closestBranch = null;
          break;
        }else if( d < record ){
          closestBranch = branch;
          record = d;
        }
      }

      if( closestBranch != null ){
        let newDir = p5.Vector.sub(leaf.pos, closestBranch.pos);
        newDir.normalize();
        closestBranch.dir.add(newDir);
        closestBranch.count++;
      }
    }

    for( let i = this.leaves.length - 1; i >= 0; i-- ){
      if( this.leaves[i].reached ){
        this.leaves.splice(i, 1);
      }
    }

    for(let i = this.branches.length - 1; i >= 0; i-- ){
      var branch = this.branches[i];
      if( branch.count > 0 ){
        branch.dir.div(branch.count + 1);
        this.branches.push(branch.next());
        branch.reset();
      }
    }
  }


  show( ){
    for( let i = 0; i < this.leaves.length; i++ ){
      this.leaves[i].show();
    }

    // for( let i = 0; i < this.branches.length; i++ ){
    //   this.branches[i].show();
    // }

    // branches

      /*
    push();
    noFill();
    stroke(10,10)
    strokeWeight(2)
    beginShape(POINTS);
    for( let i = 0; i < this.branches.length; i++ ){
      curveVertex(this.branches[i].pos.x,this.branches[i].pos.y)
        /*
      if(this.branches[i].parent != null){
        curveVertex(this.branches[i].parent.pos.x,this.branches[i].parent.pos.y)
      }else{
        curveVertex(this.branches[i].pos.x,this.branches[i].pos.y)
      }
    }
    endShape();
    pop();

      */

    // branches
      /*
    push();
    for( let i = 0; i < this.branches.length; i++ ){
      let s = map(i,0,this.branches.length,15,2);
      stroke(s,1);
      strokeWeight(s/2);
      strokeWeight(2.5);
        stroke(50,3)
        push();
        translate(this.branches[i].pos.x,this.branches[i].pos.y);
        rotate(radians(this.dir))
        scale(0.5,2);
      point(0,0);
        pop();
    }
    pop();
      */

    push();

    for( let i = 0; i < this.branches.length; i++ ){
        push();
        strokeWeight(1)
        stroke(0,30)
        translate(this.branches[i].pos.x,this.branches[i].pos.y);
        rotate(this.branches[i].dir.x*this.branches[i].dir.y*TAU)
      line(0,0,0,map(height,0,2000,-2,-8));
        pop();
    }
    pop();

    // lineage of last branch
    /*
    push();
    let h = this.branches[this.branches.length -1];
    strokeWeight(10);
    while (h.parent != null){
      stroke(0,5);
      point(h.pos);
      h = h.parent;
      strokeWeight(3);
    }
    pop();
    */



    // log
    let b = this.leaves.length;
    if(!b){
      b = "done";
        push();
        let h = this.branches[this.branches.length -1];
        strokeWeight(height*0.01025);
        stroke(0,200);
        while (h.parent != null){
          point(h.pos);
          h = h.parent;
          stroke(0,20);
          strokeWeight(3);
        }
        pop();
        drawTitle();
      noLoop();

    }
    //text(b,20,height-20)

  }

}

