import React from 'react';
import useFetch from 'use-http';
import styled from 'styled-components';

import { PokemonType } from './PokemonType';

import {API_URL} from '../const';
import { PokemonDetails } from '../types';

const Container = styled.div`
  background-color: white;
  padding: 2rem 3rem;
  border-radius: 2rem;
`;

export function PokemonItem({id}: {id: string}) {

  const url = new URL(`pokemon/${id}`, API_URL).href;
  const { loading, error, data: pokemon } = useFetch<PokemonDetails>(url, {headers: {'Accept-Encoding': 'br'}}, [id]);

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
