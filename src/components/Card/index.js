import React,{ useRef}from 'react';
import {useDrag, useDrop} from 'react-dnd';

import { Container, Label } from './style';

export default function Card({data}) {

  //criando uma referencia com a Hook.
  const ref = useRef();

  //Ira monitorar as movimentações dos cards.
  const [{isDragging},dragRef] = useDrag({
    item: {type: 'CARD', id: data.id},
    collect: monitor =>({
      isDragging: monitor.isDragging(),
    })
  });

  //Realiza o novo posicionamento ao soltar o card.
  const[,dropRef]=useDrop({
    accept: 'CARD',
    hover(item,monitor){
      console.log(item.id);
    }
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
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

