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

Feito o import, sera possivel usar suas Hooks, que irao possibilitar a movimentação de componentes.

- useDrag({
    item: {type: 'CARD'},
    collect: monitor =>({
      isDragging: monitor.isDragging(),
    })
  });

- useDrag : aceita um objeto de especificado para movimentação. 

-"item: {type:'objeto'}" é necessário especificar o tipo de item que estara sendo arrastado. 

- collect: define uma função de 'coletor' essa é basicamente uma maneira de coletar as informações 
do estado do componente que será movido, em informações úteis para seus componentes.

Para receber as informações coletadas pela hook "useDrag" a maneira mais simples é criando uma variavel e 
usando a desestruturação, para receber apenas as informações desejadas da hook.

- const [{props}, ref] = useDrag({
    item: {type: 'CARD'},
    collect: monitor =>({
      isDragging: monitor.isDragging(),
    })
});

- props: contém as propriedades que você coletou com a hook "useDrag" de arrastar e soltar.
- ref: Isso é usado para anexar seus elementos da DOM ao react-dnd.

No conteiner do objeto que sera necessario referenciar para que 'useDrag' colete as informações.

- <Container ref={ref}>
      <header>
      </header>
      <body>
      </body>      
  </Container>

------------------------//////------------------------//////------------------------//////------------------------