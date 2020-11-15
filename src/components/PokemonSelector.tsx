import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {PokemonType} from './PokemonType';

import { API_URL } from '../const';

import { PokemonSummary } from '../types';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  background-color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  width: 200px;
  height: 250px;
`;

const ImageContainer = styled.div`
  position: relative;
  background-color: #F2F2F2;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  width: 175px;
  height: 175px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-height: 200px;
  max-width: 200px;
`;

const Overlay = styled.div`
  position: absolute;
  top: -1rem;
  right: -2rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: flex-end;
`;

const PokemonNumber = styled.p`
  color: #111111;
  font-size: 0.75rem;
  font-weight: bold;
  background-color: white;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  padding: 0.25rem;
`;

const PokemonForm = styled.p`
  color: #111111;
  font-size: 0.75rem;
  background-color: white;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  padding: 0.25rem;

  /* &:before {
    content: '('
  }

  &:after {
    content: ')'
  } */
`;

const PokemonName = styled.h2`
  font-size: 1.25rem;
  color: black;
`;


const TypesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
`;

export function PokemonSelector({pokemon}: {pokemon: PokemonSummary}) {
  const dexNum = `#${String(pokemon.number).padStart(3, '0')}`;
  return (
    <Link to={pokemon.id} style={{textDecoration: 'none'}}>
      <Container>
        <ImageContainer>
          <Overlay>
            <PokemonNumber>{dexNum}</PokemonNumber>
            {pokemon.form && <PokemonForm>{pokemon.form}</PokemonForm>}
          </Overlay>
          <Image
            loading="lazy"
            src={`${API_URL}/${pokemon.image.path}`}
            alt=""
            width={pokemon.image.width}
            height={pokemon.image.height}
          />
        </ImageContainer>
        <PokemonName>{pokemon.name}</PokemonName>
        <TypesContainer>
          {pokemon.types.map((type) => <PokemonType key={type} type={type} />)}
        </TypesContainer>
      </Container>
    </Link>
  )
}
