/*
 *
 * Title: Mountaineer Bio
 * Name: Luke Demarest
 * Date: 02/2022
 *
 */

let img;
let font;

function preload(  ){
    img = loadImage("assets/images/alpa-11.jpeg")
    font = loadFont("assets/fonts/static/EBGaramond-Regular.ttf");
}

function setup(  ){
    let w = document.querySelector("#heady").offsetWidth;
    let h = (img.height / img.width)*w;
    c = createCanvas(w,h);
    c.parent("heady");
    frameRate(25);
    textAlign(CENTER,CENTER);
    textFont(font);
    starter();
}



function draw(  ){

}

function mouseDragged(  ){
    push();
    stroke(0,100);
    strokeWeight(2)
    line(mouseX,mouseY,pmouseX,pmouseY);
    pop();
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
    push();
    fill("#222")
    stroke(255,170)
    strokeWeight(7)
    textSize(width/11.75)
    text("Mountaineer Bio",width/2,height/2)
    pop();
}
