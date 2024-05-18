let r1= 50
let r2= 50
let a1=0
let a2=0
let x1
let y1
let prevX
let prevY
let a1Inc
let a2Inc
let r
let g
let b
function setup() {
	createCanvas(500, 500)
background (20,20,20)
angleMode (DEGREES)
r1= 45
r2= 75
a1Inc = 0.5
a2Inc = 3.7
}

function draw() {
translate (width/2,height/2)
stroke (0)

for(i=0; i<15;i++) {
	const x1 =r1*cos(a1)
	const y1=r1*sin(a1)

    const x2=x1+r2*cos(a2)
	const y2=y1+r2*sin(a2)

	
	const r= map (cos(frameCount),-1,1,100,200)
	const g= map (sin(frameCount),-1,1,100,200)
	const b= map (cos(frameCount),-1,1,200,100)
	stroke (r,g,b)
	line (prevX,prevY,x2,y2)
	//stroke (random(0,255),random(0,255),random(0,255))
	prevX=x2
	prevY=y2

	a1+=a1Inc
	a2+=a2Inc
	}

}