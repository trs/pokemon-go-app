import React from 'react';
import useFetch from 'use-http';
import styled from 'styled-components';

import { PokemonSelector } from '../components/PokemonSelector';

import { API_URL } from '../const';
import { PokemonSummary } from '../types';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-around;
  justify-items: center;
`;

export function PokemonList() {
  const url = new URL('pokemon', API_URL).href;
  const { loading, error, data = [] } = useFetch<PokemonSummary[]>(url, {headers: {'Accept-Encoding': 'br'}}, []);

  return (
    <>
      {error && 'Error!'}
      {loading && 'Loading...'}
      <Container>
        { data.map((pokemon) => <PokemonSelector pokemon={pokemon} />) }
      </Container>
    </>
  )
}
