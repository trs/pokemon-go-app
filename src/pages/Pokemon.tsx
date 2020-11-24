import React from 'react';
import styled from 'styled-components';

import { PokemonItem } from '../components/PokemonItem';

const Container = styled.main`
  grid-column: 2 / span 1;
`;

export default function PokemonPage({id}: {id: string}) {
  return (
    <>
      <Container>
        <PokemonItem id={id} />
      </Container>
    </>
  );
}
