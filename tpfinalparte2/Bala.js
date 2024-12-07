class Bala{
  constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.disparada = false;
    this.img = loadImage("data/sprite3.png");
  }
  
  dibujar(){
    if(this.disparada){
    imageMode(CENTER);
    image( this.img, this.posX, this.posY) ;
      this.mover();
    }
  }
  
  mover(){
    this.posY-=5;
  }
  
  disparar(){
    this.disparada = true;
  }
  
}
