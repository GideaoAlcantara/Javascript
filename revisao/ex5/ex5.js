
function calcula() {

    let iipeso = window.document.getElementById('ipeso')
    let iialtura = window.document.querySelector('input#ialtura')
    let resp = window.document.getElementById('resposta')

    let peso = Number(iipeso.value)
    let altura = Number(iialtura.value)

    let imc = peso / (altura * altura)

    if (imc <= 17) {
        resp.innerHTML = 'voce estar abaixo do peso'
        resp.style.color='red'
    }else{
        if (imc >= 18 && imc <= 20) {
            resp.innerHTML = 'voce estar com peso Normal'
            resp.style.color='green'
        } else {
            if (imc >= 21 && imc <= 25) {
                resp.innerHTML = 'voce estar acima  do peso'
                resp.style.color='orange'
            } else {
                if (imc >= 26 && imc <= 29 ) {
                    resp.innerHTML = 'voce estar muito acima do peso'
                    resp.style.color='brown'
                } else {
                    resp.innerHTML = 'voce estar OBESO'
                    resp.style.color='red'
                }
            }
        }
    }
}
