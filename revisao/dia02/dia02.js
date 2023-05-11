 function contagem() {
   
    let iinicio = window.document.querySelector('input#inicio')
    let ifim = window.document.getElementById('fim')
    let pazzo = window.document.querySelector('input#passo')

    var respp = window.document.getElementById('resp')

    let head = window.document.getElementsByTagName('body')[0]

    var inicio = Number(iinicio.value)

    var fim = Number(ifim.value)

    var passo = Number(pazzo.value)


    let imagem = document.createElement('img')

    imagem.setAttribute('src' , 'https://meusport.com/wp-content/uploads/2023/05/52868601732_8af7e96199_k-392x272.jpg')

    head.appendChild(imagem)







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

