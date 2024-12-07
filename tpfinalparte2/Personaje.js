class Personaje{
  constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.vida = 1;
    this.bala = new Bala();
    this.img = loadImage("data/sprite.png");
  }
  
  dibujar(){
    this.bala.dibujar();
    
    imageMode(CENTER);
    image( this.img, this.posX, this.posY) ;
  }
  
  teclaPresionada(keyCode){
    if(keyCode == LEFT_ARROW){
      this.moverIzquierda();
    }else if(keyCode == RIGHT_ARROW){
      this.moverDerecha();
    }else if(keyCode == ENTER){
      this.dispararBala();
    }
  }
  
  moverDerecha(){
    this.posX += 10;
  }
  
  moverIzquierda(){
    this.posX -= 10;
  }
  
  estaVivo(){
  }
  
  dispararBala(){
    this.bala = new Bala(this.posX, this.posY);
    this.bala.disparar();
  }
  
  haDisparadoBala(){
    return this.bala.disparada;
  }
}
