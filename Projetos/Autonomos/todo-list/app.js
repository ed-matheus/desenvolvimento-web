// declarando lista vazia
let todoList = [];

// variável guardando o 'id' do input
let taskValue = document.getElementById('new-task');

// Função que adiciona a nova task
function addTask() {
    let task = taskValue.value;

    // condicional para verificar se o campo foi preenchido ou não
    if(task == '') {
        const input = document.getElementById('new-task');
        input.className = 'form-control border border-danger';

        // exibe o alerta
        // $('.alert').show();

    } else {
        const input = document.getElementById('new-task');
        input.className = 'form-control';

        todoList.push(task);
    }

    // limpando o campo do input para inclusão de nova task
    taskValue.value = '';

    render();
}

function deleteTask(index) {

    // excluindo task...
    todoList.splice(index, 1);

    // chamando a função render()
    render();

}

function render() {

    // selecionando o elemento tbody da tabela
    let listaTarefas = document.getElementById('listaTarefas')
    listaTarefas.innerHTML = '';

    // foreach percorrendo a array de tasks
    todoList.forEach((task, index) => {

        // criando a linha (<tr>)
        let linha = listaTarefas.insertRow()

        // criando as colunas (<td>)
        const coluna1 = linha.insertCell(0)
        coluna1.innerHTML = `<strong>${index + 1}</strong>`;
        coluna1.style = 'background-color: #d6d6d6; width: 30px; text-align: center;';

        const coluna2 = linha.insertCell(1)
        coluna2.innerHTML = task;
        coluna2.style = 'background-color: #e7e7e7;';

        // botão de excluir task
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-sm';
        deleteButton.style = 'margin-left: 5px;';
        deleteButton.addEventListener('click', () => deleteTask(index));

        // criando o ícone
        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-trash-can text-danger';

        deleteButton.appendChild(icon);

        const coluna3 = linha.insertCell(2);
        coluna3.appendChild(deleteButton);
        coluna3.style = 'background-color: #d6d6d6; width: 30px; text-align: center;'

    });
}