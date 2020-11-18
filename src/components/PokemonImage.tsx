import React from 'react';

import { API_URL } from '../const';

import { IPokemonImage } from '../types';

interface Props {
  src: IPokemonImage | null;
}

export function PokemonImage({src}: Props) {
  if (!src) return <img loading="lazy" />;

  return (
    <img
      loading="lazy"
      src={`${API_URL}/${src.url}`}
      alt=""
      width={src.width}
      height={src.height}
    />
  )
}
