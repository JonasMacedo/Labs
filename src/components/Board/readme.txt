    Contexto.

Usando Contexto para realizar a movimentação dos items da lista.
O contexto em si é resposavel por compartilhar uma informação entre varios componetes.

Primeiramente crie um arquivo "context.js", dentro dele realize o import da Hook "createContext".

- import { createContext } from 'react';

Feito o import declare como um arquivo exportavel.

- export default createContext({
    //Demais codigos..  
});

Dentro do arquivo nescessario realize o import do 'context'.

- import BoardContext from './context';//Importando contexto.

Após feito o import crie uma tag que ira encapsular o container, que contem o objeto do contexto, tambem 
passara a indicar como um provedor '.Provider' que servira para fornecer valores ao contexto.

- <BoardContext.Provider value={{}}>
      <Container>
        //Demais codigo..        
      </Container>
</BoardContext.Provider>

O atributo 'value' sera um objeto, por isso são passado duas chaves '{{}}' uma para informar que sera 
passado um JS dentro do JFX, e a outra para indicar que sera passado um objeto.

- value={{}}

Geralmente o context sera usado junto com diversas hooks, para realizar o monitoramento do estado do component, 
em que o contexto, ira compartilhar com o restante da API.

Obs.: O context não substitui o uso do Redux, sua utilização depende muito da situação.

