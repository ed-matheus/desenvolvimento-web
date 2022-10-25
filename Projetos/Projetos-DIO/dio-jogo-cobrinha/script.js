let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); // aqui o 'context' renderiza o que acontece dentro do canvas.
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "up";

// Nesta variável definimos que a comida da Snake aparecerá aleatoriamente dentro do mapa do nosso game.
// Math.floor = retira o ponto flutuante.
// Math.random = gera um número/posição aleatória.
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box 
}

// criando e definindo a cor com função.
function criarBG(){
    context.fillStyle = "#48b038"; // o fillStyle trabalha com o estilo do canvas/contexto.
    context.fillRect(0, 0, 16 * box, 16 * box); // o fillRect desenha o retangulo onde acontece o jogo.
}

function criarSnake(){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "darkgreen";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood(){
    context.fillStyle = "#e03131";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "up") direction = "down";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "down") direction = "up";
}

function iniciarJogo(){
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 * box && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "up") snake[0].y = 0;
    if(snake[0].y < 0 * box && direction == "down") snake[0].y = 16 * box;

    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert("GAME OVER")
        }
    }

    criarBG();
    criarSnake();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "up") snakeY += box;
    if(direction == "down") snakeY -= box;
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;

    if (snakeX != food.x || snakeY != food.y){
        snake.pop();
    }
    else{
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100);
