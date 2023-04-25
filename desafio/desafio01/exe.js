//AULA ASSISTIDA DA CONDICAO 1 OK , 2 OK. FALTA 3 E 4




function nascer() {


    let origem = window.document.getElementById('país')
    let saída = window.document.getElementById('resp')

    let img = document.createElement('img')

    let nasc = String(origem.value)


    if (nasc == 'brasil' || nasc == 'Brasil') {

          saída.innerHTML = `voce é brasileiro`


    } else {

          saída.innerHTML += `voce é extrangeiro`

    }
}




/*let agora = new Date()

let hoje = agora.getHours()

console.log(`A hora atual é ${hoje}`);

if (hoje < 12) {
    console.log(`bom dia`);
} else {
    if (hoje < 16) {
        console.log(`boa tarde`);
    } else {
        if (hoje > 16) {
            console.log(`boa noite`);
        }
    }
}
*/


/*let hoje = new Date()

let atual = hoje.getDay()

switch (atual) {

        case 0:
                console.log(`hoje é domingo`);    
        break;

        case 1:
                console.log(`hoje é segunda`);
        break;

        case 2:
                console.log(`hoje é terça`);
        break;

        case 3:
                console.log(`hoje é quarta`);
        break;

        case 4:
                console.log(`hoje é quinta`);
        break;

        case 5:
                console.log(`hoje é sexta`);
        break;

        case 6:
                console.log(`hoje é sabado`);
        break;

    default:
           console.log(`[ERRO]`);
        break;
}*/