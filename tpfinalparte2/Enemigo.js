class Enemigo {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(0,255,0);
    this.vida = true;
    this.bala = new Bala();
    this.img = loadImage("data/sprite2.png");
  }
  
  dibujar(){
    if(this.vida){
    imageMode(CENTER);
    image( this.img, this.posX, this.posY) ;
    }
  }
  
  estaVivo(){
  }
  
  matar(){
    this.vida = false;
  }
  
  haTocadoLaBala(bala){
    if(dist(this.posX, this.posY, bala.posX, bala.posY) < 15){
      this.matar();
      objJuego.puntos++;
    }
  }
}
