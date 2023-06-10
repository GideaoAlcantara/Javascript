function horario() {

   let atual = new Date()
   let hora = atual.getHours()

   let ihora = window.document.getElementById('hora')
   let resp = window.document.querySelector('div#res')
   let fundo = window.document.getElementsByTagName('body')[0]

  
  /* let teste = window.document.querySelector('img#teste')

   //1 passo - cria uma TAG

   let imag = window.document.createElement('img')

   //2 passo - add um ID

   imag.setAttribute('id','foto')*/

    var cuelho = window.document.createElement('img')
    cuelho.setAttribute('id','foto')
  
  
   

   if (hora > 0 && hora <= 12) {

         ihora.innerHTML = `Agora são <strong>${hora} Horas</strong>. Bom dia`
         fundo.style.backgroundColor='#FCEFB4'

        /*  //3 passo - add um src e o arquivo nas condições
         imag.setAttribute('src','https://c.pxhere.com/photos/77/2f/blue_Color_field_sky-1609844.jpg!s')

         //4 passo add a TAG criada na TAG resposta
         resp.appendChild(imag) */


         
   } else {
        if (hora > 12 && hora <= 17) {

            ihora.innerHTML = `Agora são <strong>${hora} Horas</strong>. Boa Tarde`

            //segunda maneira de fazer 
            document.body.style.backgroundColor='#B06630'

           /* imag.setAttribute('src' , 'https://th.bing.com/th/id/OIP.ADsKbR8Os4F2a3rWfoeSxwAAAA?pid=ImgDet&rs=1')

            resp.appendChild(imag)*/

            //segunda maneira de fazer
            teste.src = 'https://th.bing.com/th/id/OIP._rnt-YvxF5YEfXCzRp29WQHaHa?pid=ImgDet&w=700&h=700&rs=1'

            
           



        } else {
           if (hora > 17) {

            ihora.innerHTML = `Agora são <strong>${hora} Horas</strong>. Boa Noite`
            fundo.style.backgroundColor='#023E8A'

          /*  imag.setAttribute('src','https://th.bing.com/th/id/R.95448e1b60179d15b828700cfde9cf1f?rik=%2bInsaKg4vGul6w&riu=http%3a%2f%2fup.deskcity.org%2fpic_360%2f4d%2f75%2fdd%2f4d75dd4e89d861b6afac36f408ea53c7.jpg&ehk=IOsMfbiVUK%2bWOg%2fjY1RuDAfXuaQqXLKdm7Jmo6lA8sc%3d&risl=&pid=ImgRaw&r=0')

            resp.appendChild(imag)*/

            cuelho.setAttribute('src','https://th.bing.com/th/id/OIP.7Ftx8Jwh3uQek1rh46rprQHaE5?pid=ImgDet&rs=1')
             resp.appendChild(cuelho)
           } 
        }
   }
}


/*function inicioefim(x , y) {
   if (x <= y) {
       while (x <= y) {
         console.log(x);
         x++
       }
   } else {
      if (x >= y) {
         do {
            console.log(x);
            x--
         } while (x >= y);

      }
   }
}

inicioefim(0 , 10)


let atual = new Date()

let hora = atual.getHours()

console.log(hora);*/

let atual = new Date()
let hora = 13 // atual.getHours()
console.log(hora);

switch (hora) {
   case 20:
           console.log(`são ${hora} horas`);
      break;

      case 13:
         console.log(`são ${hora} horas`);
    break;

   default:
          console.log(`[ERRO]`);
      break;
}
