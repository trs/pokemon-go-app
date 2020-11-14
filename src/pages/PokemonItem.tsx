import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from 'use-http';
import styled from 'styled-components';

import { PokemonType } from '../components/PokemonType';

import {API_URL} from '../const';
import { PokemonDetails } from '../types';

const Container = styled.div`
`;

export function PokemonItem() {
  const { key } = useParams<{key: string}>();

  const url = new URL(`pokemon/${key}`, API_URL).href;
  const { loading, error, data: pokemon } = useFetch<PokemonDetails>(url, {headers: {'Accept-Encoding': 'br'}}, [key]);

  return (
    <Container>
      {error && 'Error!'}
      {loading && 'Loading...'}
      {pokemon && <>
        <p>{pokemon.name}</p>
        {pokemon.types.map(({name}) => <PokemonType key={name} type={name} />)}
        <img
          src={`${API_URL}/${pokemon.image.path}`}
          alt=""
          width={pokemon.image.width}
          height={pokemon.image.height}
        />
      </>}
    </Container>
  )
}
