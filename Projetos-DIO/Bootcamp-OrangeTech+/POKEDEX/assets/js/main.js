// função para converter o pokemon em uma lista
function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => '<li class="type '+type+'">'+type+'</li>').join('')}
                    </ol>

                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>              
            </li>
    `
}

// pegando o elemento pela ID e guardando na constante pokemonList
const pokemonList = document.getElementById('pokemonList')

// interface de uma "promise"
pokeApi.getPokemons().then((pokemons = []) => {
    const newHTML = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHTML
})
