/*deslocamento de bit

let n10 = 20 ,res = n10 << 3

console.log(res);

operador ternario

let teste = 12

console.log(!(teste%2)?'par':'impar');

operador typeoff

let v1 =10
let v2 ='10'
let v3 =v1===v2
let v4 ={ nome : 'pedro'}

console.log("Valor "+v1+" - tipo: "+typeof(v1));
console.log("Valor "+v2+" - tipo: "+typeof(v2));
console.log("Valor "+v3+" - tipo: "+typeof(v3));
console.log("Valor "+v4+" - tipo: "+typeof(v4));*/

const jog1 = {nome:'pedro',energia:110,vida:3,magia:78}
const jog2 = {nome:'zeus',energia:100,vida:5,velocidade:23}
const jog3 = { ...jog1,...jog2}

console.log(jog3);
