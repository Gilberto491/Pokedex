class PokeApi {// eslint-disable-line no-unused-vars
  constructor() {
    this._api = 'https://pokeapi.co/api/v2/pokemon/';
    this._audio = "https://pokemoncries.com/cries-old/";
  }

  buscarTodos() {
    return this._fazRequisicao( '?limit=1050&offset=0' );
  }

  buscarPorId( id ) {
    return this._fazRequisicao( id );
  }

  buscarAleatorio() {
    const pokemonIdAleatorio = Math.round( Math.random() * 893 );
    return this.buscarPorId( pokemonIdAleatorio );
  }

  _fazRequisicao( rota = '' ) {
    return fetch( `${ this._api }${ rota }` )
      .then( resultado => resultado.ok ? resultado.json() : Promise.reject() );
  }

}
