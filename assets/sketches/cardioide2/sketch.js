function setup() {
  createCanvas(windowWidth,windowHeight);
  strokeWeight(1);
  
  
}
function draw() {
const R = 50
const r = 50
const d = 50


  background(20,20,20);
  //assi
  stroke(240,240,220);
  line(250,height/2,900,height/2);
  line(width/2,0,width/2,height);
  translate (width/2, height/2);


  // cerchietto
  const a = frameCount * 0.01;
  const x1 = (R + r) * cos(a);
  const y1 = (R + r) * sin(a);
  const x2 = x1 - d * cos((R /r+ 1) * a);
  const y2 = y1 - d * sin((R/r+1) * a);
  fill(240,240,220);
  stroke(2);
  circle (x2, y2, 16);

  // struttura
  noFill();
  stroke(240,240,220);
  line (x1, y1, x2, y2);
  circle (0, 0, R*2);
  ellipse(x1, y1, 2 * r, 2 * r)


  fill(240,240,220);
  noStroke();
  const num = 2000
  for (let i=0; i<num; i++) {
  
  const rot = TAU / num * i * 3;
  const x1 = (R + r) * cos(rot);
  const y1 = (R + r) * sin(rot);
  const x2 = x1 - d * cos((R / r + 1) * rot);
  const y2 = y1 - d * sin((R / r + 1) * rot);
    circle(x2,y2,3);
  }
 
}