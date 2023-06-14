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
*/

let fat = 5
let n = 1

while (fat >= n) {
   fat = fat * n
   n--
}

console.log(fat);



