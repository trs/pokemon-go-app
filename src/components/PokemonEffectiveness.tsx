import React from 'react';
import useFetch from 'use-http';
import styled from 'styled-components';

import {PokemonType} from './PokemonType';

import {API_URL} from '../const';
import { IPokemonDefendTypeEffectiveness } from '../types';

import './PokemonEffectiveness.css';

interface Props {
  types: string[];
}

export function PokemonEffectiveness({types}: Props) {
  const url = new URL(`api/types/${types.map((type) => type.toLocaleLowerCase()).join(',')}`, API_URL).href;
  const { loading, error, data } = useFetch<IPokemonDefendTypeEffectiveness>(url, {headers: {'Accept-Encoding': 'br'}}, [types]);

  console.log(data)

  return (
    <div>
      {error && 'Error!'}
      {loading && 'Loading...'}

      {data && data.defendEffectiveness.sort((a, b) => b.value - a.value).map(({types: [type], value}) => (
        <div>
          <PokemonType type={type.toLocaleLowerCase()}>{type} (x{value})</PokemonType>
        </div>
      ))}
    </div>
  );
}
