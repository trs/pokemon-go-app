import React from 'react';
import styled from 'styled-components';

import {PokemonType} from './PokemonType';
import {PokemonForm} from './PokemonForm';
import {PokemonImage} from './PokemonImage';

import { IPokedexEntry, IPokemonImages } from '../types';

const Container = styled.div`
  flex: 1;
  position: relative;
  display: grid;
  grid-template-rows: 1fr 0fr 0fr;
  align-items: center;
  justify-items: center;
`;


const Image = styled(PokemonImage)`
  max-height: 225px;
  max-width: 225px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: flex-end;
`;

const PokemonName = styled.h2`
  font-size: 1.25rem;
  padding: 0.25rem 0;
  font-weight: 600;
  color: black;
  text-transform: uppercase;
`;

const TypesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
`;

interface Props {
  pokemon: IPokedexEntry;
  image?: keyof IPokemonImages;
  className?: string;
}

export function PokemonEntry({pokemon, image, className}: Props) {
  const pokedexNumber = `#${String(pokemon.number).padStart(3, '0')}`;

  return (
    <Container className={className}>
      <Overlay>
        <PokemonForm form="">{pokedexNumber}</PokemonForm>
        { pokemon.forms && pokemon.forms.map((form) => <PokemonForm key={form.code} form={form.code}>{form.name}</PokemonForm>) }
      </Overlay>

      <Image images={pokemon.images} value={image ?? 'normal'} />

      <PokemonName>{pokemon.name}</PokemonName>

      <TypesContainer>
        {pokemon.types.map((type) => <PokemonType key={type} type={type}>{type}</PokemonType>)}
      </TypesContainer>
    </Container>
  )
}
