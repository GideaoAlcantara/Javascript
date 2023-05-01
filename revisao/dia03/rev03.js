/*let exemplo = [9,2,4,7,1,0,3,5]

let pp = 1

let pos = exemplo.indexOf(pp)

console.log();1 

if (pos == -1) {
    console.log(`[ERRO] Valor não encontrado !`);
} else {
    console.log(`a casa ${pos} tem o valor ${pp}`);
}

console.log();

for (let valor in exemplo) {
    if (exemplo.hasOwnProperty.call(exemplo, valor)) {
        let element = exemplo[valor];
        console.log(`${element}`);
    }
}

console.log();

exemplo.forEach(valor02 => {
    console.log(`${exemplo[valor02]}`);
});

console.log();

for (const iterator of exemplo) {
    console.log(exemplo[iterator]);
}

/*for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
*/

let valor = []

valor[0] = 'presente'

valor.push('futuro')

valor.unshift('passado')

valor.shift()



console.log(valor[0],valor[1],valor[2]);



