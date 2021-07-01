const pokeApi = new PokeApi();
const nome = document.getElementById( 'nome' );
const imagem = document.getElementById( 'imagem' );
const altura = document.getElementById( 'altura' );
const peso = document.getElementById( 'peso' );
const mensagemId = document.getElementById( 'mensagemId' );
const campoPokemonId = document.getElementById( 'campoPokemonId' );
const botaoPegarAleatorio = document.getElementById( 'botaoPegarAleatorio' );
const poderes = document.getElementById( 'poderes' );
const tipos = document.getElementById( 'tipos' );
const status = document.getElementById( 'status' );
const formularioBusca = document.getElementById( 'formularioBusca' );
const audio = document.getElementById( 'audio' );

botaoPegarAleatorio.onclick = () => pegaPokemon();

formularioBusca.onsubmit = ( event ) => {
  event.preventDefault();
  const pokemonId = campoPokemonId.value;
  return pegaPokemon( pokemonId );
}

function renderizaCarregandoPokemon() {
  const imagem = 'https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif';
  return renderizaPokemon( { imagem, coresPoder: ['#f03335'] } )
}

function renderizaAudio(id) {
  audio.innerHTML = '';
  if(!id) return
  const element = document.createElement("audio");
  element.controls = 'on';
  element.src = `https://pokemoncries.com/cries/${id}.mp3`;
  element.volume = 0.3;
  element.autoplay = 'on';
  element.style.width = '255px';
  audio.appendChild(element);
}

function renderizaPokemon( pokemon = {} ) {
  const cor1 = pokemon.coresPoder ? pokemon.coresPoder[0] : 'transparent';
  const cor2 = pokemon.coresPoder ? pokemon.coresPoder[1] || cor1 : cor1;
  poderes.style.background = `linear-gradient(135deg,  ${ cor1 } 50%, ${ cor2 } 50%)`;
  nome.innerHTML = pokemon.nome || '';
  imagem.src = pokemon.imagem || '';
  altura.innerHTML = pokemon.altura || '';
  peso.innerHTML = pokemon.peso || '';
  tipos.innerHTML = pokemon.poderes || '';
  mensagemId.innerHTML = pokemon.formatedId || '';
  status.innerHTML = pokemon.status || '';
  renderizaAudio(pokemon.id);
  
}

function pegaPokemon( pokemonId ) {
  renderizaCarregandoPokemon();
  if ( pokemonId ) {
    return pokeApi.buscarPorId( pokemonId )
      .then( pokemon => {
        const poke = new Pokemon( pokemon );
        mensagemId.innerHTML = '';
        return renderizaPokemon( poke );
      } ).catch( () => mensagemId.innerHTML = 'Digite um id válido' );
  }
  return pokeApi.buscarAleatorio().then( pokemon => {
    const poke = new Pokemon( pokemon );
    campoPokemonId.value = '';
    renderizaPokemon( poke );
  } )
}

pegaPokemon();
