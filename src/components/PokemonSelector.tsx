import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {PokemonType} from '../components/PokemonType';

import { API_URL } from '../const';

import { PokemonSummary } from '../types';

const Container = styled.div``;

export function PokemonSelector({pokemon}: {pokemon: PokemonSummary}) {

  return (
    <Container>
      <Link to={pokemon.id}>
        <p>{pokemon.name}</p>
        {pokemon.types.map((type) => <PokemonType key={type} type={type} />)}
        <img
          loading="lazy"
          src={`${API_URL}/${pokemon.image.path}`}
          alt=""
          width={pokemon.image.width}
          height={pokemon.image.height}
        />
      </Link>
    </Container>
  )
}
