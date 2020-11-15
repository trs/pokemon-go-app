import React from 'react';
import useFetch from 'use-http';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { PokemonSelector } from './components/PokemonSelector';
import { PokemonItem } from './components/PokemonItem';

import { PokemonSummary } from './types';
import { API_URL } from './const';

import './App.css';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 960px;
  margin: 0 auto;
  justify-content: center;
  justify-items: center;
  gap: 1rem;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .75);
`;

export default function App() {
  const {pathname} = useLocation();
  const id = pathname.slice(1);

  const { loading, error, data = [] } = useFetch<PokemonSummary[]>(
    new URL('pokemon', API_URL).href,
    {headers: {'Accept-Encoding': 'br'}},
    []
  );

  if (id) {
    return (
      <PokemonItem id={id} />
    );
  }

  return (
    <>
      {error && 'Error!'}
      {loading && 'Loading...'}

      <Container>
        { data.map((pokemon) => <PokemonSelector pokemon={pokemon} />) }
      </Container>
    </>
  );
}
