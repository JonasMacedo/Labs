import React from 'react';

import { Container, Label } from './style';

export default function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1"/>
      </header>
      <p> Descrição da Bio do Card.</p>
      <img src='https://api.adorable.io/avatars/97/abott@adorable.png' alt="Avatar"/>
      
    </Container>
  );
}

