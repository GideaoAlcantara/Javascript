function enviar() {

    let valor = [ , , , , ]

    valor += window.document.getElementById('valor1')


    function contar() {

  
        let resp = window.document.getElementsByTagName('div')[0]
    
    
        for(let V = 0 ; V < valor ; V++){
    
              resp.innerHTML += (`${valor[V]}`)
    
        }
    
    
    
    }

}

