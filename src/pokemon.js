const CORES = {
  ghost: 'gray',
  fire: 'orange',
  ice: 'cyan',
  psychic: 'darkmagenta',
  poison: 'purple',
  bug: 'green',
  normal: 'white',
  flying: 'darkblue',
  dragon: 'orangered',
  water: 'blue',
  steel: 'ligthgray',
  grass: 'lime',
  rock: 'darkgray',
  ground: 'brown',
  fighting: 'darkred',
  fairy: 'pink',
  dark: 'black',
  electric: 'yellow'
}

class Pokemon {// eslint-disable-line no-unused-vars
  constructor( objDaAPI ) {
    this._nome = objDaAPI.name;
    this._imagem = objDaAPI.sprites.front_default;
    this._altura = objDaAPI.height;
    this._id = objDaAPI.id;
    this._peso = objDaAPI.weight;
    this._poderes = objDaAPI.types.map( ( { type } ) => type.name );
    this._status = objDaAPI.stats.map( ( { stat } ) => stat.name );
    this._statusValores = objDaAPI.stats.map( ( stat ) => stat.base_stat );
  }

  get nome() {
    return this._nome;
  }

  get imagem() {
    return this._imagem;
  }

  get altura() {
    return `altura ${ this._altura * 10 } cm`;
  }

  get id() {
    return `id: ${ this._id }`;
  }

  get peso() {
    const pesoKg = String( this._peso / 10 ).replace( '.', ',' )
    return `peso: ${ pesoKg } kg`;
  }

  get poderes() {
    return `poderes: ${ this._poderes.join( "," ) }`;
  }

  get status() {
    return `${ this._status[0]} ${ this._statusValores[0] }  
            ${ this._status[1]} ${ this._statusValores[1] }
            ${ this._status[2] } ${ this._statusValores[2] }
            ${ this._status[3] } ${ this._statusValores[3] }
            ${ this._status[4] } ${ this._statusValores[4] }
            ${ this._status[5] } ${ this._statusValores[5] }
        `;
  }

  get coresPoder() {
    return this._poderes.map( poder => this._pegaCor( poder ) );
  }

  _pegaCor( poder ) {
    const cor = CORES[poder];
    if ( !cor ) return "white";
    return cor;
  }
}
