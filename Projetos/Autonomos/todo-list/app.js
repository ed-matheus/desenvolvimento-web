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
        $('.alert').show();

    } else {
        const input = document.getElementById('new-task');
        input.className = 'form-control';

        todoList.push(task);

        if(todoList.length > 0) {
            // fecha o alerta
            $('.alert').hide();
        }
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
        const linha = listaTarefas.insertRow();

        // criando as colunas (<td>)
        const coluna1 = linha.insertCell(0)
        coluna1.innerHTML = `<strong>${index + 1}</strong>`;
        coluna1.style = 'background-color: #cfd1d1; width: 30px; text-align: center; padding-top: 12px;';

        const coluna2 = linha.insertCell(1)
        coluna2.innerHTML = task;
        // coluna2.className = 'd-flex align-center';
        coluna2.style = 'background-color: #e1e3e3; padding-top: 10px;';

        // // botão de excluir task
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-sm';
        deleteButton.addEventListener('click', () => deleteTask(index));

        // ícone de exclusão da task
        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-solid fa-trash-can text-danger';

        // editButton.appendChild(editIcon);
        deleteButton.appendChild(deleteIcon);

        // coluna 4 com o botão de deletar task
        const coluna3 = linha.insertCell(2);
        coluna3.appendChild(deleteButton);
        coluna3.style = 'background-color: #cfd1d1; width: 48px; text-align: center;'

    });
}


// Partes do botão de Editar Task (ainda não implementado no projeto)

/*
function editTask(index) {
    
}
*/

// botão de editar task (ainda não implantado completamente)
/*
const editButton = document.createElement('button');
editButton.className = 'btn btn-sm';
editButton.addEventListener('click', () => editTask(index));
*/

// ícone de edição da task
/*
const editIcon = document.createElement('i');
editIcon.className = 'fa-solid fa-pen-to-square text-primary';
*/

// coluna 3 com o botão de editar task
/*
const coluna3 = linha.insertCell(2);
coluna3.appendChild(editButton);
coluna3.style = 'background-color: #d6d6d6; width: 48px; text-align: center;';
*/