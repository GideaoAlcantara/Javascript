let valor = [1,3,2,4,6,5,7,9,8,0]

//valor.sort()

valor[10] = 10

console.log(valor);

let resp = valor[3] * valor[3]

console.log(resp);

console.log();

for(let x in valor){
    console.log(`a casa ${x} tem o valor ${valor[x]}`);
}
