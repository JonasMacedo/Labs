
    Arquivo resposavel pela pre estilização global.

Primeiramente realize a importação da biblioteca "styled-componentes", desta biblioteca
sera feito o uso de uma hook que facilitara o a estilização 'CSS' mesclada ao 'JS'. 

- import {createGlobalStyle} from 'styled-components';

Feito o import da biblioteca, basta declarar como um metodo exportavel. 
Dentro do metodo usando a sintaxe de uma 'template string', poderá ser feito diversas 
estilizações com 'CSS'.

Neste aquivo alem das configurações de estilização 'CSS', tambem será feito o import da fonte "Roboto", 
um tipo de fonte da api do google.

- export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

    body{
        //estilizações.
    }
`;

Devidamente configurado as estilizações, basta realizar o import nos aquivos que farao uso deles.