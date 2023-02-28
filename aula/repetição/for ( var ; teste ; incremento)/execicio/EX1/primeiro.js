

function soma(){

 let inic = window.document.getElementById('start')
 let fim = window.document.querySelector('input#end')
 let paso = window.document.getElementById('pass')
 let resp = window.document.querySelector('p#resp')

 

 if(inic.value.lenght  == 0 || fim.value.lenght == 0 || paso.value.lenght  == 0){

   window.alert('[ERRO], Preencha os formularios vazioo!')

 }else{

 let x = Number(inic.value)
 let y = Number(fim.value)
 let z = Number(paso.value)

    if(x < y){

        //CONTAGEM PROGRESSIVA
       
        for(var c = x ; c <= y ; c += z){
            resp.innerHTML += `${c} `
        }

        resp.innerHTML += `\u{1F3C1}`

    }else{

        //CONTAGEM REGRESSIVA
       
        for(var d = x ; d >= y ; d -= z){
            resp.innerHTML += ` ${d}  `
        }

        resp.innerHTML += `\u{1F3C1}`
    }
   
 }

}