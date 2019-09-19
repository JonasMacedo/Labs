Trabalhando com icones.

Para trabalhar com icones no react, é necessario utilizar uma biblioteca especifica.
Esta biblioteca possui uma grande quantidade de fontes de icons existentes na internet.
- yarn add react-icons.

Apos feito o download da biblioteca, basta realizar o import no arquivo, e especificar o
tipo de icone desejado.
- import {MdAdd} from 'react-icons/md';

Feito o import do icone desejado crie uma tag para o icone, dentro dela ira especifica
as proprieades do icone. A tag do icone pode ir dentro de outra tag se necessario.
- <MdAdd size={24} color="#fff"/>

Para utiliza-lo bem é bom ler sua documentação, para saber como utilizar os diversos 
icones fornecidos pela biblioteca

------------------------//////------------------------//////------------------------//////------------------------

Hack na estilização.

Para palicar um efeito em um item seguido por outro item, usa-se o hack.

- & + div{

}

Neste hack sera aplicado os efeito css, mas apenas os elementos seguindos pelo segundo 
elemento recebera o efeitos.
