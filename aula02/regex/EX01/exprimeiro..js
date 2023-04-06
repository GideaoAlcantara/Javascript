
let str = "Olá Mundo!";
let n = str.search(/mundo/i);
console.log(n);

//retornará 4, que é a posição da palavra na string inicia
/*
resumo
search = pesquisar
replace = substitui
*/

let strr = "Olá mundo! Programando JavaScript pelo mundo"
let txt = strr.replace(/mundo/g,"universo");
console.log(txt);


//altera o texto onde a palavra “mundo” para "universo", independentemente de ser maiúscula ou minúscula.

/*
  Tipos de modificadores

letra i: Executa a busca ignorando letras maiúsculas e minúsculas.
letra g: Executa uma pesquisa global (encontre todas os resultados em vez de parar após a primeira ocorrência).
letra m: Executar o ajuste de considerando as quebras de linha.
*/

/*
Padrões de Expressão Regular

Os colchetes são usados para encontrar um intervalo de caracteres:

 

Descrição da Expressão
[abc] Encontre qualquer um dos caracteres entre os colchetes
[0-9] Encontre qualquer um dos dígitos entre os parênteses
(x | y) Encontre uma das alternativas separadas por |
Metacaracteres são caracteres com um significado especial:
*/

/*
 Descrição do Quantificador
n + Corresponde a qualquer string que contenha pelo menos um n
n * Corresponde a qualquer cadeia que contenha zero ou mais ocorrências de n
*/

//script usa o método exec para encontrar uma instancia dentro de uma string.
let myRe = /d(b+)d/g;
let myArray = myRe.exec('cdbbdbsbz');
console.log(myArray);

//Retorna todas as ocorrencias das letras “a” a “h”, independente de serem maiúsculas ou minúsculas

let strrr = "Cara, cadê o meu carro?";
let patt1 = /[a-h]/gi;
console.log(patt1);

//Procura por ocorrências da letra “o” na string

let strrrr = "Hellooo World! Hello Mundoooooo!"; 
let patt12 = /o+/g;
let result = strrrr.match(patt12);
console.log(result);