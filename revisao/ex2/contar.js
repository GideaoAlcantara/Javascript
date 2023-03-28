/*function enviar() {

    let valor = [ , , , , ]

    valor += window.document.getElementById('valor1')


    function contar() {

  
        let resp = window.document.getElementsByTagName('div')[0]
    
    
        for(let V = 0 ; V < valor ; V++){
    
              resp.innerHTML += (`${valor[V]}`)
    
        }
    
    
    
    }

}*/
let signo = 'leão'

switch (signo) {  

           case 'aries':
            console.log('de 21 março a 20 abril');
           break;

           case 'touro':
            console.log('de 21 abril a 20 maio');
           break;

           case 'gemeos':
            console.log('de 21 maio a 20 junho');
           break;

           case 'cancer':
            console.log('de 21 junho a 22 julho');
           break;

           case 'leão':
            console.log('de 23 julho a 22 agosto');
           break;

           case 'virgem':
            console.log('de 23 agosto a 22 de setembro');
           break;

           default:
              console.log(`signo não encontrado`);
           break;
}