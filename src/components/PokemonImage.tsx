import React from 'react';

import { API_URL } from '../const';

import { IPokemonImage } from '../types';

interface Props {
  images: IPokemonImage[];
  variant: 'shiny' | 'normal';
  type: 'png' | 'gif';
  category: 'model';
}

export function PokemonImage({images, variant, type, category}: Props) {
  if (!images) return <img loading="lazy" />;

  const image = images.find((img) =>
    img
    && img.type === type
    && img.variant === variant
    && img.category === category
  );

  if (!image) return <img loading="lazy" />;

  return (
    <img
      loading="lazy"
      src={`${API_URL}/${image.path}`}
      alt=""
      width={image.width}
      height={image.height}
    />
  )
}
