// Coordenadas dos carros
let xCars = [600, 600, 600, 600, 600, 600]
let yCars = [41, 96, 150, 210, 270, 318];

// Velocidade dos carros
let speedC = [3.2, 4, 5, 2.5, 4, 3];

// Definição das propriedades para exibição dos carros
function showCar(){
  for(let counter = 0; counter < imageCars.length; counter++){
    image(imageCars[counter], xCars[counter], yCars[counter], 
          50, 40);
  }
}

// Movimentação dos carros
function moveCar(){
  for(let counter = 0; counter < speedC.length; counter++){
    xCars[counter] -= speedC[counter];
  }
}

// Retorna o carro para o ponto inicial
function returnToBeginning(){
  for(let counter = 0; counter < xCars.length; counter++){
    if(crossedEdge(xCars[counter])){
      xCars[counter] = 600;
    }
  }
}

// Confirma se o carro ultrapassou a extremidade da tela
function crossedEdge(xCars){
  return xCars < -50;
}