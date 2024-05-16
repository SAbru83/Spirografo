let slider_r1
let slider_r2
let slider_r3
let slider_r4

let slider_m1
let slider_m2
let slider_m3
let slider_m4

let slider_raggio2
let slider_raggio3
let slider_raggio4

function setup() {
	createCanvas(1000, 800)

	slider_r1 = createSlider(0, 300, 160)
	slider_r1.position(10, 10)
	slider_r1.size(200)
	

	slider_m1 = createSlider(-10, 10, 1, 1)
	slider_m1.position(230, 10)
	slider_m1.size(200)
	
	slider_r2 = createSlider(0, 300, 120)
	slider_r2.position(10, 30)
	slider_r2.size(200)

	slider_m2 = createSlider(-10, 10, -5, 1)
	slider_m2.position(230, 30)
	slider_m2.size(200)

	slider_r3 = createSlider(0, 300, 80)
	slider_r3.position(10, 50)
	slider_r3.size(200)

	slider_m3 = createSlider(-10, 10, 1, 1)
	slider_m3.position(230, 50)
	slider_m3.size(200)

	slider_r4 = createSlider(0, 300, 80)
	slider_r4.position(10, 70)
	slider_r4.size(200)

	slider_m4 = createSlider(-10, 10, 1, 1)
	slider_m4.position(230, 70)
	slider_m4.size(200)

	// slider_raggio2 = createSlider(1, 300, 60)
	// slider_raggio2.position(10, 170)
	// slider_raggio2. size(200)
	
	// slider_raggio3 = createSlider(1, 300, 60)
	// slider_raggio3.position(10, 190)
	// slider_raggio3. size(200)
	
	slider_raggio4 = createSlider(1, 300, 60)
	slider_raggio4.position(10, 100)
	slider_raggio4. size(200)
}

function draw() {
	background(20,20,20)

	const num = 1000
    stroke(240,240,220)
	noFill()
	for (let i=0; i<num; i++) {

		const rot = TAU / 1000 * i

		const cx = width/2
		const cy = height/2

		const a1 = rot * slider_m1.value()
		const r1 = slider_r1.value()
		const x1 = cx + cos(a1) * r1
		const y1 = cy + sin(a1) * r1

		const a2 = rot * slider_m2.value()
		const r2 = slider_r2.value()
		const x2 = x1 + cos(a2) * r2
		const y2 = y1 + sin(a2) * r2

		const a3 = rot * slider_m3.value()
		const r3 = slider_r3.value()
		const x3 = x2 + cos(a3) * r3
		const y3 = y2 + sin(a3) * r3

		const a4 = rot * slider_m4.value()
		const r4 = slider_r4.value()
		const x4 = x3 + cos(a4) * r4
		const y4 = y3 + sin(a4) * r4


		// circle(x1, y1, 10)
		// circle(x2, y2, slider_raggio2.value())
		// circle(x3,y3,slider_raggio3.value())
		circle(x4,y4,slider_raggio4.value())
	}



}