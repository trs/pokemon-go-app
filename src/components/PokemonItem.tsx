import React from 'react';
import useFetch from 'use-http';
import styled from 'styled-components';

import {PokemonEntry} from './PokemonEntry';
import {PokemonEffectiveness} from './PokemonEffectiveness';

import {API_URL} from '../const';
import { Pokemon } from '../types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  height: 100vh;
  width: 100vw;
  background-color: white;
`;

const PokemonEntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 1rem 1.5rem; */

  /* width: 250px;
  height: 275px; */
`;

const StyledPokemonEntry = styled(PokemonEntry)`
padding: 2rem 2rem;
`

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
            <StyledPokemonEntry pokemon={pokemon} image="normalAnimated" />
          </PokemonEntryContainer>

          <PokemonEffectiveness types={pokemon.types} />
        </>
      }
    </Container>
  )
}
