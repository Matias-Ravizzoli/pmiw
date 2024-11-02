let imagen
let Colorashe
function setup() {
  createCanvas(800, 400);
    background(68);
 Colorashe = 238
}


function trisoscuros(){
 noStroke();
// triangulos inferiores  
for (var x = 0; x < 800; x += 100) {
fill(20);
  triangle(400+x, 0, 500+x, 0, 450+x, 50);
    for (var y = 0; y <= 400; y += 200){
  triangle(400+x, y+200, 500+x, y+200, 450+x, 250+y); 

 } 
}
  // triangulos superiores
  for ( x = 0; x < 800; x += 100) {
  triangle(400+x, 200, 500+x, 200, 450+x, 150);
    for ( y = 0; y <= 400; y += 100){
  triangle(400+x, 400, 500+x, 400+y, 450+x, 350+y);
      
    }
    }
}

function quadsblancos(){
 noStroke();

for (var x = 0; x < 800; x += 100) {
  quad(450+x, 150, 500+x, 100, 450+x, 50, 400+x, 100 );
    for (var y = 0; y <= 400; y += 200){
   quad(450+x, 350, 500+x, 300, 450+x, 250, 400+x, 300 ); 

 } 
}
}


function draw() {
     image(imagen, 0, 0, 400, 400);
  trisoscuros();
  fill(Colorashe);
  quadsblancos();


}

function preload() {
  imagen = loadImage('/data/ilusion.png');
}

function mousePressed() {
 Colorashe = color(random(100, 256), random(100, 256), random(100, 256));
}

function mouseReleased() {
 Colorashe = 238
}
