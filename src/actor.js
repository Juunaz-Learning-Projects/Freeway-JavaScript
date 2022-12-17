// Variável de colisão
let collided = false;

// Variáveis para as coordenadas do ator
let yActor = 366, xActor = 85;

// Variável para os pontos do jogador
let score = 0;

// Definição das propriedades para a exibir a imagem do ator na tela
function showActor(){
  image(actorImage, xActor, yActor, 30, 30);
}

// Definição dos controles para a movimentação do ator em y
function moveActor(){
  // movimenta para cima
  if(keyIsDown(UP_ARROW) && yActor > 0){
    yActor -= 2;
  }
  
  // movimenta para baixo
  if(keyIsDown(DOWN_ARROW) && yActor < 366){
    yActor += 2;
  }
}

// Identifica a colisão
function actorCollided(){
  for(let counter = 0; counter < imageCars.length; counter++){
    collided = collideRectCircle(xCars[counter], yCars[counter], 50, 40, xActor, yActor, 15);
    if(collided){
      collisionSound.play();
      playerReborn();
      availableToLosePoints();
    }
  }
}

// Altera a posição do ator para o ponto inicial
function playerReborn(){
  yActor = 366;
}

// Exibe a pontuação do jogador
function showScore(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 165, 0));
  text(score, width / 5, 27);
}

// Pontua caso o jogador chegue ao outro lado
function scored(){
  if(yActor < 15){
    scoreSound.play();
    score += 1;
    playerReborn();
  }
}

function availableToLosePoints(){
  if(score > 0){
    score -= 1;
  }
}