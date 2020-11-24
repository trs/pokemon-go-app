import React from 'react';
import useFetch from 'use-http';
import styled from 'styled-components';

import {PokemonType} from './PokemonType';
import Sparkles from './Sparkle';

import {API_URL} from '../const';
import { IPokemonDefendTypeEffectiveness } from '../types';

import './PokemonEffectiveness.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  gap: 0.5rem;
`;

const TypeContainer = styled(Sparkles)`

`;

const StyledType = styled(PokemonType)`
  font-size: 1rem;
  width: 100%;
`;

interface Props {
  types: string[];
}

export function PokemonEffectiveness({types}: Props) {
  const url = new URL(`api/types/${types.map((type) => type.toLocaleLowerCase()).join(',')}`, API_URL).href;
  const { loading, error, data } = useFetch<IPokemonDefendTypeEffectiveness>(url, {headers: {'Accept-Encoding': 'br'}}, [types]);

  console.log(data)

  return (
    <Container>
      {error && 'Error!'}
      {loading && 'Loading...'}

      {data && data.defendEffectiveness
        .sort((a, b) => b.value - a.value)
        .map(({types: [type], value, grade}) => (
        <TypeContainer key={type} enabled={grade >= 6}>
          <StyledType grade={grade} type={type.toLocaleLowerCase()}>{type} (x{value})</StyledType>
        </TypeContainer>
      ))}
    </Container>
  );
}
