// Variáveis para controlar o jogo
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

// Seleciona todas as células da matriz
const cells = document.querySelectorAll('.cell');

// Adiciona um event listener a cada célula
cells.forEach(cell => {
    cell.addEventListener('click', cellClicked);
});

// Função chamada quando uma célula é clicada
function cellClicked(event) {
    const cell = event.target;
    const index = Array.from(cells).indexOf(cell);
    // console.log(`index = ${index}`);

    if(gameBoard[index] !== '') {
        return;
    }

    // // Marca a célula com o símbolo do jogador atual
    if(currentPlayer === 'X') {
        cell.innerHTML = '<i class="fa-solid fa-x" style="font-size: 60px;"></i>';
    } else {
        cell.innerHTML = '<i class="fa-regular fa-circle" style="font-size: 60px;"></i>';
    }

    // Marca o index específico dentro da Array
    gameBoard[index] = currentPlayer;
    console.log(gameBoard);

    // Função que verifica a vitória
    if(checkWin()) {
        // incluindo ícone de comemoração
        const divAlert = document.getElementById('winAlert');
        divAlert.style = 'text-align:center';
        divAlert.innerHTML = `
            <p style="font-size: 32px;">O vencedor é ${currentPlayer}!</p> 
            <i class="fa-solid fa-trophy" style="font-size: 35px; margin-left: 5px;"></i>
        `;
        
        // exibe o alerta
        $('#winAlert').show();
    }

    // Chamando a função que verifica se a array está completamente preenchida
    checkArray()

    // Função que verifica o empate
    if(checkDraw()) {
        // incluindo ícone de empate
        const divAlert = document.getElementById('drawAlert');
        divAlert.style = 'text-align:center';
        divAlert.innerHTML = `
            <p style="font-size: 32px;">Vish, deu velha!</p> 
            <i class="fa-solid fa-face-tired" style="font-size: 35px; margin-left: 5px;"></i>
        `;
        
        // exibe o alerta
        $('#drawAlert').show();
    }

    if(checkWin() || checkDraw()) {
        const container = document.getElementById('resetButtonContainer');

        const resetButton = document.createElement('button');
        resetButton.className = 'btn btn-dark btn-lg';
        resetButton.textContent = 'Reiniciar';
        resetButton.onclick = () => {
            location.reload('index.html');
        }

        container.appendChild(resetButton);
    }

    // Alterna o jogador atual
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
    // possibilidades de vitória
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
        [0, 4, 8], [2, 4, 6]             // Diagonal
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;

        if (
            gameBoard[a] !== '' &&
            gameBoard[a] === gameBoard[b] &&
            gameBoard[a] === gameBoard[c]
        ) {
            return true;
        }
    }

    return false;
}

function checkDraw() {    
    if(checkArray() && checkWin() === false) {
        return true;
    }

    return false;
}

function checkArray() {
    // Loop para verificar se todas as células foram preenchidas
    for (let i = 0; i < gameBoard.length; i++) {
        console.log(gameBoard[i]);
        if(gameBoard[i] === null || gameBoard[i] === '') {
            return false;
        }
    }

    return true;
}

/*
// Resgatando o elemento pelo ID
var elemento = document.getElementById("meuElemento");

// Resgatando o ID do elemento
var id = elemento.id;

// Exibindo o ID no console
console.log("O ID do elemento é: " + id);
*/
