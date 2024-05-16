
let slider_N
let slider_R
let slider_d

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(1);
  
  slider_N = createSlider(2, 16, 5, 1)
  slider_N.position(10, 10)
  slider_N.size(200)
 
  slider_R = createSlider(0, 150, 100)
  slider_R.position(10, 30)
  slider_R.size(200)

  slider_d = createSlider(0, 150, 25)
  slider_d.position(10, 50)
  slider_d.size(200)

}
function draw() {
  const R = (slider_R.value());
  const N = (slider_N.value());
  const d = (slider_d.value());

  const r = R / N;

  background(20);
  //assi
  stroke(245,245,220);
  line(250, height / 2, 900, height / 2);
  line(width / 2, 0, width / 2, height);
  translate(width / 2, height / 2);


  // cerchietto
  const a = frameCount * 0.01;
  const x1 = (R - r) * cos(a);
  const y1 = (R - r) * sin(a);
  const x2 = x1 + d * cos((R - r) * a / r);
  const y2 = y1 - d * sin((R - r) * a / r);
  fill(255, 0, 0);
  noStroke();
  circle(x2, y2, 16);

  // struttura
  noFill();
  stroke(245,245,220);
  line(x1, y1, x2, y2);
  circle(0, 0, R * 2);
  ellipse(x1, y1, 2 * r, 2 * r)


  fill(255, 0, 0);
  noStroke();
  const num = 2000
  for (let i = 0; i < num; i++) {

    const a = TAU / num * i * 3;
    const x1 = (R - r) * cos(a);
    const y1 = (R - r) * sin(a);
    const x2 = x1 + d * cos((R - r) * a / r);
    const y2 = y1 - d * sin((R - r) * a / r);
    circle(x2, y2, 3);
  }

}
