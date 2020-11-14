import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {PokemonList} from './pages/PokemonList';
import {PokemonItem} from './pages/PokemonItem';

import './App.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:key">
          <PokemonItem />
        </Route>
        <Route path="/">
          <PokemonList />
        </Route>
      </Switch>
    </Router>
  );
}
