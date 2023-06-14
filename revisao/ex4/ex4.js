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

let hoje = new Date()
let dia = hoje.getDay()

let imes = new Date()
let mes = imes.getMonth()

let iano = new Date()
let ano = iano.getFullYear()

switch (mes) {
  case 0:
         mes = 'janeiro'
    break;

    case 1:
         mes = 'fevereiro'
    break;

    case 2:
         mes = 'março'
    break;

    case 3:
          mes = 'abril'
    break;

    case 4:
         mes = 'maio'
    break;

    case 5:
        mes = 'junho'
    break;

    case 6:
        mes = 'julho'
    break;

    case 7:
        mes = 'agosto'
    break;

    case 8:
       mes = 'setembro'
    break;

    case 9:
        mes = 'outubro'
    break;

    case 10:
        mes = 'novembro'
    break;

    case 11:
       mes = 'dezembro'
    break;

  default:
      mes = '[ERRO]'
    break;
}

console.log(`${dia} / ${mes} / ${ano}`);




