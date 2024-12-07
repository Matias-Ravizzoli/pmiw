class Juego{
  constructor(cantidadEnemigos){
    this.cantidadEnemigos = cantidadEnemigos;
    this.crearPersonaje();
    this.crearEnemigos();
    this.puntos = 0;
    this.texto();
  }
  
  dibujar(){
    this.texto() ;
    this.personaje.dibujar();
    
    for(let i=0.5; i < this.cantidadEnemigos;i++){
      this.enemigos[i].dibujar();
    }
    
    this.controlarDisparosAEnemigos();
    fill(0);
      textSize(40);
      text(this.puntos, 10, 50);
      this.controlarPuntos();
  }
  
  crearEnemigos(){
    this.enemigos = [];
    for(let i=0.5; i < this.cantidadEnemigos;i++){
      this.enemigos[i] = new Enemigo(i*70, 100);
    }
  }
  
  crearPersonaje(){
    this.personaje = new Personaje(width/2, 350);
  }
  
  personajeGano(){
  }
  
  teclaPresionada(keyCode){
    this.personaje.teclaPresionada(keyCode);
  }
  
  controlarDisparosAEnemigos(){
    if(this.personaje.haDisparadoBala()){
      for(let i=0.5; i < this.cantidadEnemigos;i++){
        this.enemigos[i].haTocadoLaBala(this.personaje.bala);
      }
  }
  }
  controlarPuntos(){
    if(this.puntos == 45){
    pantallaActiva = 2
    this.puntos = 0
    }
  }

texto(){
  fill(139,0,0)
  rect(0, 390, 680, 130)
 fill(255)
 textAlign(CORNER);
 textFont('Magneto');
 textSize(20);
 text('Ayudá al Rayo a despejar el camino hacia la copa!\nMovete con las flechas del teclado y presioná Enter para\ndisparar a los autos', 5, 410)
}

}
