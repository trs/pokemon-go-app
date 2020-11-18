import React, {PropsWithChildren} from 'react';
import styled from 'styled-components';

import './PokemonType.css';

export const TypeStyle = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #F8F8F8;
  text-shadow: .05em .05em .1em black;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.85rem;
  border: .1em solid #fff;
  box-shadow: 0 0 0 .1em rgba(0, 0, 0, 0.5);
  border-radius: .5em;
  text-align: center;
  padding: 0.25em 0.75em;
`;

export function PokemonType({type, children}: PropsWithChildren<{type: string}>) {
  return (
    <TypeStyle className={`type type--${String(type).toLocaleLowerCase()}`}>
      <code>{children}</code>
    </TypeStyle>
  )
}
