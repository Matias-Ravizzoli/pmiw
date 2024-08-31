function setup() {
  createCanvas(800, 400);
}


function trisoscuros(){
 noStroke();
// triangulos inferiores  
for (var x = 0; x < 800; x += 100) {
fill(20);
  triangle(x, 0, 100+x, 0, 50+x, 50);
    for (var y = 0; y <= 400; y += 200){
  triangle(x, y+200, 100+x, y+200, 50+x, 250+y); 

 } 
}
  // triangulos superiores
  for ( x = 0; x < 800; x += 100) {
  triangle(x, 200, 100+x, 200, 50+x, 150);
    for ( y = 0; y <= 400; y += 100){
  triangle(x, 400, 100+x, 400+y, 50+x, 350+y);
      
    }
    }
}

function quadsblancos(){
 noStroke(); 
for (var x = 0; x < 800; x += 100) {
fill(238);
  quad(50+x, 150, x, 100, 50+x, 50, 100+x, 100 );
    for (var y = 0; y <= 400; y += 200){
   quad(50+x, 350, x, 300, 50+x, 250, 100+x, 300 ); 

 } 
}
}

function draw() {
  background(68);
  trisoscuros();
  quadsblancos();


}