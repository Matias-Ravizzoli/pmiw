// TP#Final parte 2 
//Olivero Valentino y Ravizzoli Matias
// comisión 3
// link: https://youtu.be/c0Wo4VFg7pY
let objJuego;
let pantallaActiva;
let imagenInicio;
let imagenGanar;
let imagenPerder;
const limite = 21;
let empezartemp;
let sound;

function preload() {
  sound = loadSound('file.mp3'); // Cargar sonido
}

function setup() {
  createCanvas(640,480);
  objJuego = new Juego(9);
    pantallaActiva = 0
    imageMode(CENTER);
    imagenInicio = loadImage("data/imagen.png");
    imagenGanar  = loadImage("data/imagenganar.png");
    imagenPerder  = loadImage("data/imagenperder.png");

}


function draw() {
  background(200);
 if (pantallaActiva == 0){
   imageMode(CENTER);
   image(imagenInicio, 320 , 240, 640, 390);
 } else {
         button = createButton('Encender/Apagar Sonido');
  button.position(5, 367);
  button.mousePressed(toggleSound); // Asignar función al botón
  sound.setVolume(0.2); 
 }
 if (pantallaActiva == 1){
objJuego.dibujar();
 let tiempo = (millis() - empezartemp) / 1000;
 let tiempocorre = limite - tiempo;
      text(floor(tiempocorre), 580, 50);
    if (tiempo > limite) {
      pantallaActiva = 3;
    }
} if (pantallaActiva == 2){
  imageMode(CORNER);
   image(imagenGanar, 0 , 0, 640, 390);
     fill(139,0,0)
  rect(0, 390, 680, 130)
 fill(255)
 textAlign(CORNER);
 textFont('Magneto');
 textSize(20);
 text('Ganaste! El rayo pudo continuar su carrera para ganar la\ncopa Pistón. Presioná para reiniciar el juego\nUna producción de Olivero Valentino y Ravizzoli Matias', 5, 410)

 }
 if (pantallaActiva == 3){
  imageMode(CORNER);
   image(imagenPerder, 0 , 0, 640, 390);
     fill(139,0,0)
  rect(0, 390, 680, 130)
 fill(255)
 textAlign(CORNER);
 textFont('Magneto');
 textSize(20);
 text('Perdiste! El rayo no pudo continuar corriendo para ganar\nla copa Pistón. Presioná para reiniciar el juego\nUna producción de Olivero Valentino y Ravizzoli Matias', 5, 410)

 }
}


function keyPressed(){
    objJuego.teclaPresionada(keyCode);
  if (pantallaActiva == 0){
    empezartemp = millis();
  pantallaActiva = 1
  
 } if (pantallaActiva == 2){
  pantallaActiva = 0
 } 
if (pantallaActiva == 3){
  pantallaActiva = 0
 } 
}

function toggleSound() {
  if (sound.isPlaying()) {
    sound.stop(); // Detener sonido si está sonando
  } else {
    sound.play(); // Reproducir sonido si no está sonando
  }
}
