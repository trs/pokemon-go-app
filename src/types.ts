export interface IPokemonForm {
  name: string;
  code: string;
}

export interface IPokedexEntry {
  id: string;
  number: number;
  name: string;
  forms: IPokemonForm[];
  types: string[];
  images: IPokemonImages;
}

export interface IPokemonImages {
  normal: IPokemonImage | null;
  shiny: IPokemonImage | null;
  normalAnimated: IPokemonImage | null;
  shinyAnimated: IPokemonImage | null;
}

export interface Pokemon extends Omit<IPokedexEntry, 'types'> {
  stats: IPokemonStats;
  types: string[];
}

export interface IPokemonStats {
  stamina: number;
  attack: number;
  defence: number;
}

export interface IPokemonDefendTypeEffectiveness {
  name: string;
  defendEffectiveness: IPokemonTypeEffectiveness[]
}

export interface IPokemonTypeEffectiveness {
  types: string[];
  value: number;
}

export interface IPokemonImage {
  url: string;
  width: number;
  height: number;
}
