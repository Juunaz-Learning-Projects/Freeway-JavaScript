// Declarando uma variável para cada imagem
let firstCarImage, actorImage, secondCarImage, 
    streetImage, thirdCarImage;

// Declarando uma variável para cada efeito sonoro
let soundTrack, collisionSound, scoreSound;

// Carregando as imagens e os efeitos sonoros
function preload(){
  streetImage = loadImage("images/estrada.png");
  actorImage = loadImage("images/ator-1.png");
  firstCarImage = loadImage("images/carro-1.png");
  secondCarImage = loadImage("images/carro-2.png");
  thirdCarImage = loadImage("images/carro-3.png");
  imageCars = [firstCarImage, secondCarImage, thirdCarImage,
               firstCarImage, secondCarImage, thirdCarImage];
  
  soundTrack = loadSound("sounds/trilha.mp3");
  collisionSound = loadSound("sounds/colidiu.mp3");
  scoreSound = loadSound("sounds/pontos.wav");
}