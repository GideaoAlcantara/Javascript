
function pensao() {
   let nome = document.getElementById('nomi')
   let idade = document.querySelector('input#ydade')
   let trab = document.querySelector('input#ttrab')
   let uniao = document.querySelector('input#tuniao')
   let respo = document.getElementById('resp')

   if(nome.value == 0 || idade.value == 0 || trab.value == 0 || uniao.value == 0){
      window.alert('[ERRO], preencha o formulario !')
   }else{
      let nmm = String(nome.value)
      let idd = Number(idade.value)
      let tbb = Number(trab.value)
      let unn = Number(uniao.value)

      if(unn >= 2 && tbb >= 18 && idd < 22){
         respo.innerHTML = ` Olá <strong>${nmm}</strong>, seu tempo de pensão é de <strong>6 anos</strong>`
      }else{
          if(unn >= 2 && tbb >= 18 && idd >= 22 && idd < 27){
            respo.innerHTML = ` Olá <strong>${nmm}</strong>, seu tempo de pensão é de <strong>8 anos</strong>`
          }else{
            if(unn >= 2 && tbb >= 18 && idd >= 27 && idd <= 30){
               respo.innerHTML = ` Olá <strong>${nmm}</strong>, seu tempo de pensão é de <strong>10 anos</strong>`
            }else{
               if(unn >= 2 && tbb >= 18 && idd >= 31 && idd <= 41){
                  respo.innerHTML = ` Olá <strong>${nmm}</strong>, seu tempo de pensão é de <strong>15 anos</strong>`
               }else{
                  if(unn >= 2 && tbb >= 18 && idd >= 42 && idd <= 44){
                     respo.innerHTML = ` Olá <strong>${nmm}</strong>, seu tempo de pensão é de <strong>20 anos</strong>`
                  }else{
                     if(unn >= 2 && tbb >= 18 && idd >= 45){
                        respo.innerHTML = ` Olá <strong>${nmm}</strong>, seu tempo de pensão é de <strong>Vitalicio</strong>`
                     }else{
                        respo.innerHTML = ` Olá <strong>${nmm}</strong>, seu tempo de pensão é de <strong>4 meses</strong>`
                     }
                  }
               }
            }
          }
      }
   }
}



if(unn >= 2 && tbb >= 18 && idd < 22)
respo.innerHTML = ` Olá <strong>${nmm}</strong>, seu tempo de pensão é de <strong>6 anos</strong>`