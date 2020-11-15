import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import {PokemonType} from './PokemonType';
import {PokemonForm} from './PokemonForm';

import { API_URL } from '../const';

import { PokemonSummary } from '../types';

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  width: 250px;
  height: 275px;
  text-decoration: none;

  border: 0.5rem solid transparent;
  outline: none;
`;

const ImageContainer = styled.div`
  position: relative;
  background-color: #edf2f7;
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
  top: -0.5rem;
  right: -1.75rem;
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

export function PokemonSelector({pokemon}: {pokemon: PokemonSummary}) {
  const dexNum = `#${String(pokemon.number).padStart(3, '0')}`;

  const nodeRef = React.useRef(null);

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
    return () => setLoaded(false);
  }, []);

  const duration = 400;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyle: Record<string, React.CSSProperties> = {
    entering: { opacity: 0.75 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0.5 },
    exited:  { opacity: 0 },
  };

  return (
    <CSSTransition nodeRef={nodeRef} in={loaded} timeout={duration}>
      {state =>
        <Container to={pokemon.id} style={{...defaultStyle, ...transitionStyle[state]}}>
          <ImageContainer>
            <Overlay>
              <PokemonForm form="">{dexNum}</PokemonForm>
              {pokemon.forms.map((form) => <PokemonForm key={form.id} form={form.id}>{form.name}</PokemonForm> )}
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
            {pokemon.types.map((type) => <PokemonType key={type} type={type}>{type}</PokemonType>)}
          </TypesContainer>
        </Container>
      }
    </CSSTransition>
  )
}
