function setup() {
  createCanvas(700, 480);
  
  // R, G & B VALUES.
  background(00, 00, 00);
  
  // take a big brush
  strokeWeight(20);
  // dip it in the color purple
  stroke('orange')
} 


function draw() {
//declare variables
  let posY = mouseX
  let posX = mouseY
  // place a dot on a screen
point(posY, posX);
}
