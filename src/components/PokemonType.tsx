import React, {PropsWithChildren} from 'react';
import styled from 'styled-components';

import './PokemonType.css';

export const TypeStyle = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #F8F8F8;
  text-shadow: .075em .075em .1em black;
  text-transform: uppercase;
  font-weight: bold;
  border: .15rem solid #fff;
  box-shadow: 0 0 0 .15rem rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  text-align: center;
  padding: 0.25em 0.75em;
  font-size: 0.95rem;
`;

export function PokemonType({type, grade = 1, className = '', children}: PropsWithChildren<{type: string, grade?: number, className?: string}>) {
  return (
    <TypeStyle className={`type type--${String(type).toLocaleLowerCase()} type-grade-${grade} ${className}`}>
      <code>{children}</code>
    </TypeStyle>
  )
}
