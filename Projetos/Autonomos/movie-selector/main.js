
// Declarando lista vazia
let movieList = [];
const input = document.getElementById('new-movie');

// Função que adiciona novos filmes à lista
function addMovie() {

    // pegando o 'value' do input
    const movie = input.value;

    // esta condição verifica se o campo foi preenchido ou não
    if(input.value == '') {
        const input = document.getElementById('new-movie');
        input.className = 'form-control border border-danger';
        input.placeholder = 'Campo vazio, digite algum filme!';

    } else {
        const input = document.getElementById('new-movie');
        input.className = 'form-control';
        input.placeholder = 'Digite seus filmes aqui';

        movieList.push(movie);
    }

    // limpa o campo para novo preenchimento, após o usuário clicar no botão 'adicionar'
    input.value = '';

    render();
}

// Função que seleciona o filme de fato, aleatóriamente
function movieSelector() {

    if(movieList.length < 2 || movieList.length == 0) {
        const selectorButton = document.getElementById('movie-selector');
        selectorButton.style = 'border: 2px solid red;';

        const newDiv = document.getElementById('newDiv');
        newDiv.style = ` 
            text-align: center; 
            font-weight: 500;
        `;
        newDiv.className = 'text-danger';
        newDiv.textContent = 'A lista precisa ter ao menos dois filmes';

        selectorButton.insertAdjacentElement('afterend', newDiv)

    } else {
        const selectorButton = document.getElementById('movie-selector');
        selectorButton.style = '';

        const newDiv = document.getElementById('newDiv');
        newDiv.style = '';
        newDiv.className = '';
        newDiv.textContent = '';

        selectorButton.insertAdjacentElement('afterend', newDiv)

        const resultado = Math.floor(Math.random() * movieList.length);
    
        // selecionando o container do título pelo id
        const movieContainer = document.getElementById('movie');
        movieContainer.style = `
            border: 3px solid gray;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #4b0081;
        `;

        // selecionando o elemento h1 presente dentro do container
        const h1 = movieContainer.querySelector('h1'); 
        h1.className = 'display-2';
        h1.textContent = movieList[resultado];

        movieContainer.appendChild(h1);
    }
    
}

// Função para deletar um filme da lista
function deleteMovie(index) {

    // excluindo task...
    movieList.splice(index, 1);

    // chamando a função render()
    render();

}

function render() {

    // selecionando o elemento tbody da tabela
    let listaFilmes = document.getElementById('listaFilmes')
    listaFilmes.innerHTML = '';

    // foreach percorrendo a array de tasks
    movieList.forEach((movie, index) => {

        // criando a linha (<tr>)
        let linha = listaFilmes.insertRow()

        // criando as colunas (<td>)
        const coluna1 = linha.insertCell(0)
        coluna1.innerHTML = `<strong>${index + 1}</strong>`;
        coluna1.style = 'background-color: #d6d6d6; width: 30px; text-align: center;';

        const coluna2 = linha.insertCell(1)
        coluna2.innerHTML = movie;
        coluna2.style = 'background-color: #e7e7e7;';

        // botão de excluir task
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-sm';
        deleteButton.style = 'margin-left: 5px;';
        deleteButton.addEventListener('click', () => deleteMovie(index));

        // criando o ícone
        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-trash-can text-danger';

        deleteButton.appendChild(icon);

        const coluna3 = linha.insertCell(2);
        coluna3.appendChild(deleteButton);
        coluna3.style = 'background-color: #d6d6d6; width: 30px; text-align: center;';

    });
}
