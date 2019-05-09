function setup() {
  createCanvas(800, 800); background(210, 237, 242); noStroke(); fill(102);
}

function draw() {fill(255, 186, 215); circle(400, 290, 70); fill(255, 186, 215); circle(355, 365, 70);
fill(255, 186, 215); circle(445, 365, 70); fill(255, 186, 215); circle(440, 310, 70); fill(255, 186, 215); circle(360, 310, 70); fill(182, 239, 143); rect(395, 340, 10, 350); fill(255, 186, 215); circle(400, 390, 70); fill(255, 240, 109); circle(400, 340, 40);
fill(182, 239, 143); ellipse(390, 490, 30, 55); fill(255, 255, 255); ellipse(630, 46, 100, 70); fill(255, 255, 255); ellipse(680, 70, 200, 90); fill(255, 255, 255); ellipse(585, 80, 130, 70);

 {
if (mouseIsPressed) {
fill(210, 237, 242);
} else {
fill(255);
}
ellipse(mouseX, mouseY, 80, 80);
}

                 
}