import React,{useState} from 'react';
import produce from 'immer';//Import para trabalhar com estados.

import {loadLists} from '../../services/api';//Importando serviço fake.

import BoardContext from './context';//Importando contexto.

import List from '../List';//Importando as listas para o Board.
import { Container } from './styles';

const data = loadLists();

export default function Board() {
  
  const[lists,setList] = useState(data);

  function move(fromList, from, to){
    //console.log('CardDrag: ',from,'CardTarget: ',to);

    setList(produce(lists, draft => {
      const dragged = draft[fromList].cards[from];
      
      draft[fromList].cards.splice(from, 1);//Removendo elemento da lista.
      draft[fromList].cards.splice(to, 0, dragged);//Colocando em uma nova posição.
    }))

  }

  return (
    <BoardContext.Provider value={{lists,move}}>
      <Container>
        {lists.map((list, index)=> <List key={list.title} index={index} data={list} />)}
      </Container>
    </BoardContext.Provider>

  );
}
