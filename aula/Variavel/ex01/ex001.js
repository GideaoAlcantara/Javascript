let num = [9,8,6,5,4,7,3,2,0,1]

//num.sort() // faz mostrar os valores em ordem decrescente. obs:primeiro organiza , depois add os valores extras.


num[10] = 10 //criei a casa 10 com valor dez!

num.push(11) //crie uma casa e add o valor 11 , ele nao especificar ,mas colocar o valor em ultimo.



//mostra os valores de NUM
console.log(`Nosso vetor é um ${num}`);


//mostra quantas casas NUM tem
console.log(`Nosso vetor tem ${num.length} elementos`);


//mostra o que a casa 08 de NUM tem de valor
console.log(num[8]);

console.log();

//usando com reeperticoes

for(let pos = 0 ; pos<num.length  ; pos++ ){

    console.log(`a posicao ${pos} tem o valor ${num[pos]}`);

}

console.log();

//SIMPLIFICANDO

//para cada posicao em NUM repita !
for(let pos2 in  num) {
    console.log(num[pos2]);
}

//ele vai dizer em qual casa fica o valor 7
console.log();

let pos3 = num.indexOf(7)
 console.log(`casa ${pos3}`);