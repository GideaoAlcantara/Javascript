
function contar() {
    let num01 = window.document.getElementById('inum')
    let num02 = window.document.querySelector('input#iinum')
    let exit = window.document.getElementById('iresp')
    let caixa = window.document.getElementById('caixa12')

    let valor01 = Number(num01.value)
    let valor02 = Number(num02.value)

    let img = window.document.createElement('img')
    img.setAttribute('src','https://cdn.pixabay.com/photo/2018/05/16/01/45/clouds-3404728_1280.jpg')
    img.setAttribute('width','300px')
    caixa.appendChild(img)
     


   for (let index = 0; index < valor02; index++) {
  
    
        exit.innerHTML+=`${valor01} `
        valor01+=1

   

   }
   
   
}

/*
 while (valor02 > valor01) {
       
        exit.innerHTML += `${valor01} `
        valor01 += 1
    }
*/ 
//----------------------------------------------
/*
do {
        exit.innerHTML+=`${valor01} `
        valor01+=1
       
   } while (valor02 >= valor01);
 */
//--------------------------------------------------
/*
if (valor02 > valor01) {
    
    do {
        exit.innerHTML+=`${valor01} `
        valor01+=1
       
   } while (valor02 >= valor01);

   } else {
       if(valor02 < valor01){
           
        do {
            exit.innerHTML+=`${valor01} `
            valor01-=1
           
       } while (valor02 <= valor01);

       }
   }
*/

/*aritmético*/


/*function acao(...numero){
  
   for (const teste of numero) {
      console.log(teste);
   }
}

console.log(acao(2,3,5,6,7,8,9,0));

let anonima =(n1,n2)=>{
    return n1+n2
}
console.log(anonima(3,9));*/



const soma = (...valores) =>{
    
    const somar = val =>{

        let res = 0

        for (let V of val) {
            res += V
        }
        return res
    }

    return somar(valores)
}

console.log(soma(2,4,6));