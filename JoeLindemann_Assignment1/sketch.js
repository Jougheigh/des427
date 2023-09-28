let mic, ftt
let fr = 30
let song
function setup() {
  createCanvas(710, 400);
  noFill();
  song = loadSound ('Drama_tighten-it-up.mp3');

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(song);
  frameRate (10);
}

function draw() {
  background(200);
  // iPod position
  let x = 200; // X-coordinate for the iPod
  let y = 200;
  // Body
  fill(150);
  stroke(100);
  strokeWeight(2);
  rect(x - 60, 100, 125, 200, 10);


  
  // Screen
  fill(random(200, 255), random(200, 255), random(200,255), (random(0, 255)));
  rect(x - 40, 120, 85, 70, 10);

  // Visualizer
  let spectrum = fft.analyze();



  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i/14+165, map(spectrum[i], 0, 450, height, 0)/4.7+95);
    stroke(random(0,255), random(0,255), random(0,255), random(0,255));
    fill(0,0,0,0);
  }
  endShape();
    

  
  // Outer Click Wheel
  fill(200);
  stroke(50);
  strokeWeight(1);
  ellipse(x, 245, 80, 80);

    // Click Wheel
  fill(100);
  stroke(50);
  strokeWeight(1);
  ellipse(x, 245, 60, 60);
  
  // Click Wheel Button
  fill(150);
  ellipse(x, 245, 25, 25);

  // Pause/Play Button
  quad(x-5, y+77, x-4, y+77, x-4, y+82, x-5, y+82);
  quad(x-2, y+77, x-1, y+77, x-1, y+82, x-2, y+82);
  triangle(x+4, y+79.5, x+1, y+77.5, x+1, y+82);


  // Left Button
 triangle(x+37, y+45, x+34, y+50, x+34, y+40);

  // Right Button
  triangle(x-37, y+45, x-34, y+50, x-34, y+40);

  // Menu Button
  fill(20);
  noStroke();
  textSize(7);
  text('Menu', x-8, y+12.5);

  // User Display Prompt
  fill(20);
  noStroke();
  textSize(14);
  text('Left click to start the party!!', x+200, y);


}
function mousePressed() {
  if (song.isPlaying()){
    song.stop();
  }
  else {
song.play();
  
  }
}
