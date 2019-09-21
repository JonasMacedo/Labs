import React,{useState} from 'react';
import {loadLists} from '../../services/api';//Importando serviço fake.

import BoardContext from './context';//Importando contexto.

import List from '../List';//Importando as listas para o Board.
import { Container } from './styles';

const data = loadLists();

export default function Board() {
  
  const[lists,setList] = useState(data);

  function move(from, to){
    console.log(from,to);
  }

  return (
    <BoardContext.Provider value={{lists,move}}>
      <Container>
        {lists.map(list=> <List key={list.title} data={list} />)}
      </Container>
    </BoardContext.Provider>

  );
}
