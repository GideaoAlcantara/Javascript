/*function contar() {
  let  numb01 = window.document.getElementById('inumb')
  var  numb02 = window.document.querySelector('input#iinumb')
  let  resppp = window.document.getElementsByClassName('resp')[0]

  let num1 = Number(numb01.value)
  let num2 = Number(numb02.value)

  if (numb01.value == 0 && numb02.value == 0) {
        console.log(`[ERRO],Valores vazios.`);
  } else {
    if (num2 >= num1) {
            do {
                resppp.innerHTML += `${num1} `
                num1++
            } while (num2 >= num1);
    } else {
        if(num2 <= num1){
            do {
                resppp.innerHTML += `${num1} `
                num1--
            } while (num2 <= num1); 
        }
    }
  }
}
let max = 1let n = 0
000
let pares = 0

for(let x = n; x < max; x++){
    if (x%2!=0) {
       continue
    }
    pares++
}
console.log("fim da execução");
console.log(`Existem ${pares} numeros pares`);
*/

//... indica que pode colocar o tanto que quiser na propriedade sem criar varias props.
 /*function soma(...valores){
    let tam=valores.length
    let res=0
    for(let i =0;i<tam;i++){
        res+=valores[i]
    }
    return res
 }

console.log(soma(10,2,5,8));

function teste(...variaveis) {
        let soma = 0
            for(let x in variaveis){
                soma+=variaveis[x]
             }
        return soma
}

console.log(teste(5,10,15));*/

let exemplo = new Function("v1","v2","v3","return v1+v2+v3")
//funcao construtor anonima
//argumento=v1,v2 & corpo = return v1+v2

//console.log(exemplo(3,7,9));

let n1 = [12,13,14,90]
let n2 = [45,67,89]
let n3 = [...n1]
n1[3] = 78

console.log(n1);
console.log(n2);
console.log(n3);