function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => '<li class="type">'+ typeSlot.type.name +'</li>')

}

// função para converter o pokemon em uma lista
function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${convertPokemonTypesToLi(pokemon.types).join('')}
                    </ol>

                    <img src="${pokemon.sprites.other.dream_world.front_default}"
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
