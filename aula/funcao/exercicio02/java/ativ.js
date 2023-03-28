// 01 VARIAVEIS

let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')

let valores = [] // sevir para analisar os dados


// 02 FUNÇÃO PRINCIPAL

function adicionar() {

    //isNumero e inLista são funcões com parametro das varieveis NUM e Valores
    
        if (isNumero(num.value) && !inLista(num.value,valores)) {
            
        valores.push(Number(num.value))

        let item = document.createElement('option')

        item.text = `valor ${num.value} adicionado`

        lista.appendChild(item)

        //limpartela da resposta
        res.innerHTML = ''

        }else{
            window.alert('Valor invalido ou já encontrado na lista.')
        }
    }

    //limpatela

num.value = ''
num.focus()


// 03 FUNÇAO SECUNDARIA

function isNumero(n) {

    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
    
}

function inLista(n,l) {
                            // -1 é  o valor que não foi encontrado na lista

    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
    
}

//PRINCIPAL PARTE II

function finalizar() {
    
    if(valores.length == 0){
           window.alert(`adicione valores antes de finalizar`)
    }else{
        let tot = valores.length
         //var de comparar o maior e menor valor
        let maior = valores[0]

        let menor = valores[0]
        //var de soma e media
        let soma = 0

        let media = 0

     for(let pos in valores){

        //soma os valores
        soma += valores[pos]
    

        //comparar maior e menor
        if(valores[pos] > maior){
            maior = valores[pos]
        }else{
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
     }
      //----------------------------------
          //media

          media = soma / tot


        res.innerHTML = ''

        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados.</p>`

        res.innerHTML += `<p>o maior valor informado foi ${maior}.</p>`

        res.innerHTML += `<p>o menor valor informado foi ${menor}.</p>`

        res.innerHTML += `<p>somandos todos os numeros temos ${soma}</p>`

        res.innerHTML += `<p>a média dos valores informado é ${media}</p>`
    }

}



