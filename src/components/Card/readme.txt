Card

Este component sera resposavel pela estilização e renderiação dos cards.

------------------------//////------------------------//////------------------------//////------------------------

Verificação com Template String.

Para realizar um teste simples usa-se '&&' seguido pelo item, que tera alguma reação.

-{ data.user &&  <img src={data.user} alt="Avatar"/>}

------------------------//////------------------------//////------------------------//////------------------------

    Preparando o Drag and Drop.

Para trabalhar com efeitos de arrastar e soltar no react, é necessario fazer o import 
da biblioteca.

- yarn add react-dnd-html5-backend
- yarn add react-dnd

Feita o download das dependencias, basta ralizar o import no arquivo raiz do projeto das dependencias 
"react-dnd-html5-backend" e do "react-dnd".

- import {DndProvider} from 'react-dnd';
- import HTML5Backend from 'react-dnd-html5-backend'

Apos os imports, utilize a Hook "DndProvider" como um container.

- function App() {
    return (
        <DndProvider backend={HTML5Backend}>
        <Header/>
        <Board/>

        <GlobalStyle/>
        </DndProvider>
    );
}

------------------------//////------------------------//////------------------------//////------------------------

Utilizando Drag and Drop.

Dentro do arquivo correspondente ao componente que sofrera o efeito de drag e drop, realize o import 
da biblioteca.

- import {useDrag} from 'react-dnd';

Feito o import, sera possivel usar suas Hooks
