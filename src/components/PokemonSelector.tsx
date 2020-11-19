import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import {PokemonEntry} from './PokemonEntry';

import { IPokedexEntry } from '../types';

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

export function PokemonSelector({pokemon}: {pokemon: IPokedexEntry}) {
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
          <PokemonEntry pokemon={pokemon} />
        </Container>
      }
    </CSSTransition>
  )
}
