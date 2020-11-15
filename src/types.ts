export interface PokemonImage {
  path: string;
  width: number;
  height: number;
}

export interface PokemonForm {
  id: string;
  name: string;
}

export interface PokemonSummary {
  id: string;
  number: number;
  forms: PokemonForm[];
  name: string;
  image: PokemonImage;
  types: string[];
}

export interface PokemonDetails {
  id: string;
  number: number;
  forms: PokemonForm[];
  name: string;
  image: PokemonImage;
  types: Type[];
  stats: Stats;
  moves: Move[];
}

export interface Stats {
  hp: number;
  attack: number;
  defence: number;
}

export type MoveCategory = 'fast' | 'charge';

export interface Moveset {
  category: MoveCategory;
  name: string;
}

export interface Move {
  name: string;
  type: string;
  damage: number;
  duration: number;
  energy: number;
  damagePVP: number;
  energyPVP: number;
  durationPVP: number;
  category: MoveCategory;
}

export interface TypeEffectiveness {
  multiplier: number;
  description: string;
}

export interface Type {
  name: string;
  effectiveness: Record<string, TypeEffectiveness>;
}
