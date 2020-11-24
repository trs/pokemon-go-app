import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import HomePage from './pages/Home';
import PokemonPage from './pages/Pokemon';

import './App.css';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr min(90ch, 100%) 1fr;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
`;


export default function App() {
  const {pathname} = useLocation();
  const id = pathname.slice(1);

  return (
    <>
      <Container>
        {id
          ? <PokemonPage id={id} />
          : <HomePage />
        }
      </Container>
    </>
  );
}
