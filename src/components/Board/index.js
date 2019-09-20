import React from 'react';
import {loadLists} from '../../services/api';//Importando serviço fake.

import List from '../List';//Importando as listas para o Board.
import { Container } from './styles';

const lists = loadLists();

export default function Board() {
  return (
    <Container>
      {lists.map(list=> <List key={list.title} data={list} />)}
    </Container>
  );
}
