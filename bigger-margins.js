function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  for (var x = 30; x <370; x = x + 10) {
    line(x, height, mouseX, mouseY);
  }
}
