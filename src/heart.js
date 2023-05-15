let angle = 0;
let positions = [];

function setup() {
  createCanvas(300, 300);
  translate((windowWidth - width) / 2, (windowHeight - height) / 2);
}

function draw() {
  background(255, 192, 203);

  // Calculate x and y using the heart equations
  let x = 16 * pow(sin(angle), 3);
  let y = -(13 * cos(angle) - 5 * cos(2 * angle) - 2 * cos(3 * angle) - cos(4 * angle));

  // Scale and translate x and y to fit within the canvas with padding
  let xMapped = map(x, -16, 16, 100, width - 100);
  let yMapped = map(y, -18, 18, 100, height - 100);
  xMapped = constrain(xMapped, 100, width - 100);
  yMapped = constrain(yMapped, 100, height - 100);

  // Draw the fading ellipses at the previous positions
  noStroke();
  fill(255, 160, 171, 50);
  for (let i = 0; i < positions.length; i++) {
    ellipse(positions[i].x, positions[i].y, 20, 20);
  }

  // Draw the moving ellipse at the current position
  fill(255, 160, 171);
  ellipse(xMapped, yMapped, 20, 20);

  // Add the current position to the array of previous positions
  positions.unshift({ x: xMapped, y: yMapped });

  // Remove the oldest position if the array is too long
  if (positions.length > 500) {
    positions.pop();
  }

  // Increase the angle to move the ellipse along the heart path
  angle += 0.01;
}
