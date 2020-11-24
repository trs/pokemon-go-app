import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import {PokemonType} from './PokemonType';
import {PokemonForm} from './PokemonForm';
import {PokemonImage} from './PokemonImage';

import { IPokedexEntry, IPokemonImages } from '../types';

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
  gap: 0.5rem;
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
  gap: 0.5rem;
`;

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  gap: 0.25rem;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  width: 300px;
  height: 325px;
  border: 0.5rem solid transparent;
  padding: 0.5rem;

  text-decoration: none;
  outline: none;
`;

const Wrapper = styled.div`
  flex: 1;
  position: relative;
  display: grid;
  grid-template-rows: 1fr 0fr 0fr;
  align-items: center;
  justify-items: center;
`;

export function PokemonSelector({pokemon}: {pokemon: IPokedexEntry}) {
  const pokedexNumber = `#${String(pokemon.number).padStart(3, '0')}`;
  const image = 'normal';

  const nodeRef = React.useRef(null);

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
    return () => setLoaded(false);
  }, []);

  const duration = 250;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyle: Record<string, React.CSSProperties> = {
    entering: { opacity: 0.75 },
    entered: { opacity: 1 },
    exiting: { opacity: 0.5 },
    exited: { opacity: 0 },
  };

  return (
    <CSSTransition nodeRef={nodeRef} in={loaded} timeout={duration}>
      {state =>
        <Container to={pokemon.id} style={{...defaultStyle, ...transitionStyle[state]}}>
          <Wrapper>
            <Overlay>
              <PokemonForm form="">{pokedexNumber}</PokemonForm>
              { pokemon.forms && pokemon.forms.map((form) => <PokemonForm key={form.code} form={form.code}>{form.name}</PokemonForm>) }
            </Overlay>

            <Image images={pokemon.images} value={image ?? 'normal'} />

            <PokemonName>{pokemon.name}</PokemonName>

            <TypesContainer>
              {pokemon.types.map((type) => <PokemonType key={type} type={type}>{type}</PokemonType>)}
            </TypesContainer>
          </Wrapper>
        </Container>
      }
    </CSSTransition>
  )
}
