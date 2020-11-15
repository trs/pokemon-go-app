import React from 'react';
import styled from 'styled-components';

import './PokemonType.css';

const Type = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #F8F8F8;
  text-shadow: .05em .05em .1em black;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.75rem;
  border: .1em solid #000;
  border-radius: .5em;
  text-align: center;
  padding: 0.25em 0.75em;
  /* position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: .1em solid white;
    border-radius: calc(.6em - .1em);
    pointer-events: none;
  } */
`;

export function PokemonType({type}: {type: string}) {
  return (
    <Type className={`type type--${type.toLocaleLowerCase()}`}>{type}</Type>
  )
}
