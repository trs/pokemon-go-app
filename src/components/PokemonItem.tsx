import React from 'react';
import useFetch from 'use-http';
import styled from 'styled-components';

import { PokemonType } from './PokemonType';

import {API_URL} from '../const';
import { Pokemon } from '../types';
import { PokemonImage } from './PokemonImage';

const Container = styled.div`
  background-color: white;
  padding: 2rem 3rem;
  border-radius: 2rem;
`;

export function PokemonItem({id}: {id: string}) {

  const url = new URL(`api/pokemon/${id}`, API_URL).href;
  const { loading, error, data: pokemon } = useFetch<Pokemon>(url, {headers: {'Accept-Encoding': 'br'}}, [id]);

  return (
    <Container>
      {error && 'Error!'}
      {loading && 'Loading...'}
      {pokemon && <>
        <p>{pokemon.name}</p>
        {pokemon.types.map(({name}) => <PokemonType key={name} type={name}>{name}</PokemonType>)}
        <PokemonImage
          images={pokemon.images}
          category='model'
          type='gif'
          variant='normal'
        />
      </>}
    </Container>
  )
}
