const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');

const pokemonForm = document.querySelector('.pokemon__form');
const pokemonInput = document.querySelector('.pokemon__search');

const fecthPokemon = async (pokemon) => {
  const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await APIresponse.json();
  return data;
}

const renderPokemon = async (pokemon) => {
  const data = await fecthPokemon(pokemon);
  pokemonName.innerHTML = data.name;
  pokemonNumber.innerHTML = data.id;
  pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
}

pokemonForm.addEventListener('submit', (event) => {
  event.preventDefault();

  renderPokemon(pokemonInput.value)
});
