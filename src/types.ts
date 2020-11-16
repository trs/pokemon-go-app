// export interface PokemonImage {
//   path: string;
//   width: number;
//   height: number;
// }

// export interface PokemonForm {
//   id: string;
//   code: string;
//   name: string;
// }

// export interface PokemonSummary {
//   id: string;
//   number: number;
//   forms: PokemonForm[];
//   name: string;
//   image: PokemonImage;
//   types: string[];
// }

// export interface PokemonDetails {
//   id: string;
//   number: number;
//   forms: PokemonForm[];
//   name: string;
//   image: PokemonImage;
//   types: Type[];
//   stats: Stats;
//   moves: Move[];
// }

// export interface Stats {
//   hp: number;
//   attack: number;
//   defence: number;
// }

//

// export interface Moveset {
//   category: MoveCategory;
//   name: string;
// }

// export interface Move {
//   name: string;
//   type: string;
//   damage: number;
//   duration: number;
//   energy: number;
//   damagePVP: number;
//   energyPVP: number;
//   durationPVP: number;
//   category: MoveCategory;
// }


export interface IPokemonForm {
  name: string;
  code: string;
}

export interface IPokedexEntry {
  id: string;
  number: number;
  name: string;
  form: IPokemonForm | null;
  types: string[];
  generation: number;
  images: IPokemonImage[];
}


export interface Pokemon extends Omit<IPokedexEntry, 'types'> {
  stats: IPokemonStats;
  types: IPokemonType[];
}

export interface IPokemonStats {
  hp: number;
  attack: number;
  defence: number;
}

export interface IPokemonType {
  name: string;
  effectiveness: Record<string, IPokemonTypeEffectiveness>;
}

export interface IPokemonTypeEffectiveness {
  multiplier: number;
  description: string;
}

export interface IPokemonImage {
  category: 'sprite' | 'model' | 'art';
  type: 'png' | 'gif';
  variant: 'shiny' | 'normal';
  path: string;
  width: number;
  height: number;
}
