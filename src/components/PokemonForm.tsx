import React, {PropsWithChildren} from 'react';
import styled from 'styled-components';

import {TypeStyle} from './PokemonType'

import './PokemonForm.css';

const Form = styled(TypeStyle)`
  font-size: 0.75rem;
`;

export function PokemonForm({form, children}: PropsWithChildren<{form: string}>) {
  if (form === 'normal') return <></>;

  return (
    <Form className={`form form--${form.toLocaleLowerCase()}`}>{children}</Form>
  )
}
