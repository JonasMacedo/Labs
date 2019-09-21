import React,{ useRef}from 'react';
import {useDrag, useDrop} from 'react-dnd';

import { Container, Label } from './style';

export default function Card({data,index}) {

  //criando uma referencia com a Hook.
  const ref = useRef();

  //Ira monitorar as movimentações dos cards.
  const [{isDragging},dragRef] = useDrag({
    item: {type: 'CARD', index},
    collect: monitor =>({
      isDragging: monitor.isDragging(),
    })
  });

  //Realiza o novo posicionamento ao soltar o card.
  const[,dropRef]=useDrop({
    accept: 'CARD',
    hover(item,monitor){
      const draggedIndex = item.index;
      const targetIndex = index;

      //Verifica se esta em posição diferente.
      if(draggedIndex === targetIndex){
        return; 
      }

      //obtendo largura do objeto.
      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top)/2;
      
      //Obtem o deslocamento do objeto em tela.
      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      //Evita movimentação de cards desnecessarias.
      if(draggedIndex < targetIndex && draggedTop < targetCenter){
        return;
      }      

      if(draggedIndex > targetIndex && draggedTop > targetCenter){
        return
      }

      

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

