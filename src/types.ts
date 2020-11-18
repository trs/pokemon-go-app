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
  images: {
    normal: IPokemonImage | null;
    shiny: IPokemonImage | null;
    normalAnimated: IPokemonImage | null;
    shinyAnimated: IPokemonImage | null;
  }
}


export interface Pokemon extends Omit<IPokedexEntry, 'types'> {
  stats: IPokemonStats;
  // types: IPokemonType[];
  types: string[];
}

export interface IPokemonStats {
  stamina: number;
  attack: number;
  defence: number;
}

export interface IPokemonType {
  name: string;
  effectiveness?: Record<string, IPokemonTypeEffectiveness>;
}

export interface IPokemonTypeEffectiveness {
  multiplier: number;
  description: string;
}

export interface IPokemonImage {
  url: string;
  width: number;
  height: number;
}
