import React, { useEffect, useMemo, useState } from 'react';
import LazyLoad, { forceCheck } from 'react-lazyload';
import useFetch from 'use-http';
import { useDebounce } from 'use-debounce';
import styled from 'styled-components';

import { PokemonSelector } from '../components/PokemonSelector';
import { Loading } from '../components/Loading';

import { IPokedexEntry } from '../types';
import { API_URL } from '../const';

import LogoImage from '../images/pgo_logo.png';

const SearchContainer = styled.div`
  grid-column: 1 / span 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #ffffff;
  padding: 1rem 2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  grid-column: 1 / span 3;
`;

const SearchBar = styled.input`
  font-size: 1.5rem;
  background-color: #E1EBE6;
  /* border: 1px solid #377F93; */
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  width: clamp(250px, 60%, 600px);
`;

const SelectorContainer = styled.main`
  grid-column: 2 / span 1;
  display: grid;
  grid-template-columns: [start] 1fr [end] ;
  gap: 1rem;
  max-width: 960px;
  justify-self: center;
  justify-items: center;
  align-items: flex-start;

  @media (min-width: 640px) {
    grid-template-columns: [start] repeat(2, 1fr) [end] ;
  }

  @media (min-width: 960px) {
    grid-template-columns: [start] repeat(3, 1fr) [end] ;
  }
`;

const LoadingContainer = styled.div`
  grid-column: 2 / span 1;
  justify-self: center;
`;

function filterPokemonList(list: IPokedexEntry[], searchTerm: string) {
  if (!searchTerm) return list;
  return list.filter((pokemon) => {
    if (pokemon.name.toLocaleLowerCase().includes(searchTerm)) return true;
    if (String(pokemon.number).includes(searchTerm)) return true;
    if (pokemon.forms && pokemon.forms.some(({name}) => name.toLocaleLowerCase().includes(searchTerm))) return true;
    if (pokemon.types.some((type) => type.toLocaleLowerCase().includes(searchTerm))) return true;
    return false;
  })
}

export default function HomePage() {
  const [rawSearchTerm, setSearchTerm] = useState('');
  const [searchTerm] = useDebounce(rawSearchTerm, 50);

  useEffect(() => forceCheck(), [searchTerm]);

  const { loading, error, data = [] } = useFetch<IPokedexEntry[]>(
    new URL(`api/pokemon?page=0&count=10000`, API_URL).href,
    {
      headers: {'Accept-Encoding': 'br'},
      onNewData: (curr: any[], next: any[]) => [...curr, ...next],
      data: []
    },
    []
  );

  const pokemonList = useMemo(() => filterPokemonList(data, searchTerm), [data, searchTerm])

  return (
    <>
      <SearchContainer>
        <img src={LogoImage} alt="Pokemon Go" height="140px" />
        <SearchBar
          placeholder="Search"
          type="text"
          onChange={(e) => setSearchTerm(e.target.value.toLocaleLowerCase())}
          value={rawSearchTerm}
        />
      </SearchContainer>

      <SelectorContainer>
        {error && 'Error!'}

        { pokemonList.map((pokemon) => (
          <LazyLoad
            key={pokemon.id}
            height={300}
            offset={300}
          >
            <PokemonSelector
              pokemon={pokemon}
            />
          </LazyLoad>
        )) }

      </SelectorContainer>

      {loading && <LoadingContainer>
        <Loading />
      </LoadingContainer>}
    </>
  );
}
