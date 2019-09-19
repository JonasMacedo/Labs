import React from 'react';

import List from '../List';//Importando as listas para o Board.
import { Container } from './styles';

export default function Board() {
  return (
    <Container>
      <List/>
      <List/>
      <List/>
      <List/>
    </Container>
  );
}
