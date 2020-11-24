import React from 'react';
import useFetch from 'use-http';
import styled from 'styled-components';

import {PokemonEffectiveness} from './PokemonEffectiveness';

import {API_URL} from '../const';
import { Pokemon } from '../types';
import { PokemonImage } from './PokemonImage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 4rem;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const PokemonEntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export function PokemonItem({id}: {id: string}) {
  const url = new URL(`api/pokemon/${id}`, API_URL).href;
  const { loading, error, data: pokemon } = useFetch<Pokemon>(url, {headers: {'Accept-Encoding': 'br'}}, [id]);

  return (
    <Container>
      {error && 'Error!'}
      {loading && 'Loading...'}
      {pokemon &&
        <>
          <PokemonEntryContainer>
            <PokemonImage images={pokemon.images} value="normalAnimated" />
            {pokemon.name}
          </PokemonEntryContainer>

          <PokemonEffectiveness types={pokemon.types} />
        </>
      }
    </Container>
  )
}
