
function contar() {
    let num01 = window.document.getElementById('inum')
    let num02 = window.document.querySelector('input#iinum')
    let exit = window.document.getElementById('iresp')

    let valor01 = Number(num01.value)
    let valor02 = Number(num02.value)

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
