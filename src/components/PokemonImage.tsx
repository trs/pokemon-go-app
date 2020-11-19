import React from 'react';

import { API_URL } from '../const';

import { IPokemonImages } from '../types';

interface Props {
  images: IPokemonImages;
  value: keyof IPokemonImages;
  className?: string;
}

export function PokemonImage({images, value, className}: Props) {
  const src = images?.[value];
  if (!src) return <img loading="lazy" alt={""} />;

  return (
    <img
      className={className}
      loading="lazy"
      src={`${API_URL}/${src.url}`}
      alt={""}
      width={src.width}
      height={src.height}
    />
  )
}
