function tabuada() {
   let num = document.getElementById('txtn') 
   let tab = document.getElementById('seltab')


   if(num.value == 0) {
       window.alert('[ERRO], Tente Novamente !')
     
   }else{
     let n = Number(num.value)
     let C = 1
     tab.innerHTML=""
      while(C <= 10) {
        let item = document.createElement('option')
        item.text = `${n} x ${C} = ${n*C}`
        item.value = `tab ${C}`
        tab.appendChild(item) //add um elemento filho
        C++
      }
   }

   
}