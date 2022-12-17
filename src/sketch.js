// Definição das proporções da tela
function setup() {
  createCanvas(500, 400);
  soundTrack.loop();
}

// Exibição das imagens na tela 
function draw() {
  background(streetImage);
  actorCollided();
  showActor();
  showCar();
  moveCar();
  moveActor();
  returnToBeginning();
  showScore();
  scored();
}