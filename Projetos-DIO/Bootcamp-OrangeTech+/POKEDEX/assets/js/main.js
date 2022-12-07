
// navegando na página
const offset = 0;
const limit = 10;
const url = 'https://pokeapi.co/api/v2/pokemon?offset='+offset+'&limit='+limit;

// função para converter o pokemon em uma lista
function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">Grass</li>
                        <li class="type">Poison</li>
                    </ol>

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                        alt="${pokemon.name}">
                </div>              
            </li>
    `
}

// pegando o elemento pela ID e guardando na constante pokemonList
const pokemonList = document.getElementById('pokemonList')

// interface de uma "promise"
pokeApi.getPokemons().then((pokemons) => {
    const listItems = []
    // "for" para adicionar o pokemon, via código HTML incluído por JS 
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        listItems.push(convertPokemonToLi(pokemon))    
    }

    console.log(listItems)
})
