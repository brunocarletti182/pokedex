const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');

const pokemonForm = document.querySelector('.pokemon__form');
const pokemonInput = document.querySelector('.pokemon__search');

const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fecthPokemon = async (pokemon) => {
  const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  if(APIresponse.status === 200) {
    const data = await APIresponse.json();
    return data;
  }

}

const renderPokemon = async (pokemon) => {

  pokemonName.innerHTML = 'Loading...'
  pokemonNumber.innerHTML = '';

  const data = await fecthPokemon(pokemon);

  if(data) {
    pokemonImage.style.display = 'block';
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    pokemonInput.value = '';
    searchPokemon = data.id;
  } else {
    pokemonImage.style.display = 'none';
    pokemonName.innerHTML = 'Not Found';
    pokemonNumber.innerHTML = '';
    pokemonInput.value = '';
  }


}

pokemonForm.addEventListener('submit', (event) => {
  event.preventDefault();
  renderPokemon(pokemonInput.value.toLowerCase())
});

buttonPrev.addEventListener('click',() => {
  if(searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});

buttonNext.addEventListener('click',() => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);
