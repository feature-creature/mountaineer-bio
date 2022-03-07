/*
 *
 * Title: Mountaineer Bio
 * Name: Luke Demarest
 * Date: 02/2022
 *
 */

let img;
let font;

// climb route
let tree;
let num_leaves = 0;
let max_dist = 550;
let min_dist = 4;
let branch_length = 2;

function preload(  ){
    img = loadImage("assets/images/alpa-11.jpeg")
    font = loadFont("assets/fonts/static/EBGaramond-Regular.ttf");
}


function setup(  ){
    let w = document.querySelector("#heady").offsetWidth;
    let h = (img.height / img.width)*w;
    c = createCanvas(w,h);
    c.parent("heady");
    frameRate(10);
    textAlign(CENTER,CENTER);
    textFont(font);
    starter();
    branch_length = map(width,200,2000,3,8,true);
    max_dist = width / 10;

    tree = new Tree(num_leaves, max_dist, min_dist, branch_length);

}


function draw(  ){
  tree.show();
  tree.grow();
    /*
    if( frameCount % 7 == 0 ){
    drawTitle();
    }
    */
}


function windowResized(  ){
    let w = document.querySelector("#heady").offsetWidth;
    let h = (img.height / img.width)*w;
    resizeCanvas(w,h);
    starter();
}


function starter(  ){
    image(img,0,0,width,height);
    filter(GRAY)
    drawTitle();
    loop();
    tree = new Tree(num_leaves, max_dist, min_dist, branch_length);
}

function drawTitle(){
    push();
    fill("#222")
    stroke(255,200)
    strokeWeight(5)
    textSize(width/11.75)
    text("Mountaineer Bio",width/2,height/2)
    pop();
}
