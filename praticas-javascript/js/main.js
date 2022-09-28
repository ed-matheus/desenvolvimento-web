
// APRENDENDO USO DE FUNÇÕES EM JS

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome);
// }

// alert(soma(10,10));
// alert(setReplace("Gosto de formiga","formiga","pão"));

// -- UTILIZANDO FUNÇÃO PARA INTERAÇÃO COM BOTÕES --
// Neste primeiro caso, chamamos a Id "agradecimento" e inserimos o texto HTML com innerHTML, 
// tudo isso após o usuário clicar no botão pré-setado para isso.
function clicou(){ 
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
}

// Aqui, redirecionamos o usuário para outra página, e podemos usar de duas formas:
// usando window.open para abrir a página em outra aba, ou window.location.href para abrir na mesma aba.
function redireciona(){
    window.open("https://github.com/Edsano");
}

// Podemos aqui passar o cursor do mouse em cima de uma frase usando o onmouseover no HTML.
// Neste caso troca-se a frase "Passe o mouse aqui" pela frase "Uau, você passou o mouse!".
function troca(elemento){
    // document.getElementById("mousepass").innerHTML = "Uau, você passou o mouse!";
    elemento.innerHTML = "Uau, você passou o mouse!" 
    // fazendo assim, não precisamos declarar id, pois declaramos o próprio elemento (troca) para funcionar.
}

// Voltamos à frase original aqui.
function volta(elemento){
    // document.getElementById("mousepass").innerHTML = "Passe o mouse aqui.";
    elemento.innerHTML = "Passe o mouse aqui."
}

// A função abaixo é referente ao "onload" que inserimos dentro da tag <body> no HTML, com ele podemos
// somente definir o que acontecerá ao recarregar a página.
function load(){
    alert("Página carregada")
}

// Função para o "onchange" utilizado na tag <select> no HTML, aqui pode-se sempre coletar o valor 
// que o usuário selecionou.
function change(elemento){
    console.log(elemento.value)
}
