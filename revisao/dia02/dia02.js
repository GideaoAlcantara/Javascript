 function contagem() {
   
    let iinicio = window.document.querySelector('input#inicio')
    let ifim = window.document.getElementById('fim')
    let pazzo = window.document.querySelector('input#passo')

    var respp = window.document.getElementById('resp')

    var inicio = Number(iinicio.value)

    var fim = Number(ifim.value)

    var passo = Number(pazzo.value)

    if (inicio == 0 && fim == 0 && passo == 0) {
       
          window.alert('[ERRO] valores vazio !')

    } else {
      
       if (inicio >= fim) {
        
             while (inicio >= fim) {
                respp.innerHTML += `${inicio} - `
                inicio = inicio - passo
             }

       } else {
             if (inicio <= fim) {
                
                while (inicio <= fim) {
                    respp.innerHTML += `${inicio} - `
                    inicio = inicio + passo
                }

             }
       }

    }
 }

