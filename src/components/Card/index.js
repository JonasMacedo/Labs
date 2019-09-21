import React from 'react';
import {useDrag, useDrop} from 'react-dnd';

import { Container, Label } from './style';

export default function Card({data}) {

  //Ira monitorar as movimentações dos cards.
  const [{isDragging},dragRef] = useDrag({
    item: {type: 'CARD'},
    collect: monitor =>({
      isDragging: monitor.isDragging(),
    })
  });

  const[,dropRef]=useDrop({
    accept: 'CARD',
    hover(item,monitor){
      
    }
  });

  return (
    <Container ref={dragRef} isDragging={isDragging}>
      <header>
        {data.labels.map(label => <Label key={label} color={label} />)}
      </header>
      <p>{data.content}</p>
      {data.user && 
        <img src={data.user} alt="Avatar"/> 
      }
      
    </Container>
  );
}

