function verificar(){

   var data = new Date()
   var ano = data.getFullYear
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')

   if(fano.value.length == 0 || Number(fano.value) > ano) {
      window.alert(`[ERRO] verifique os dados e tenta novamente`)
   } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ''

      //add uma imagem com JS 
      var img = document.createElement('img')
      // add id na variavel img
      img.setAttribute('id','foto')

      if(fsex[0].checked) {
         genero = `homens`
         if(idade > 0 && idade < 10){
            //crianca
            img.setAttribute('src','https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
         }else{
            if(idade >= 10 && idade < 21){
                   //jovem
                   img.setAttribute('src','https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
            }else{
               if(idade>50){
                  //adulto
                  img.setAttribute('src','https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
               }else{
                  //velho
                  img.setAttribute('src','https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
               }
            }
            
         }
      }else{
         if(fsex[1]){
            genero= `mulher`
         }else{
            if(idade > 0 && idade < 10){
               //crianca
               img.setAttribute('src','https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
            }else{
               if(idade >= 10 && idade < 21){
                      //jovem
                      img.setAttribute('src','https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
               }else{
                  if(idade>50){
                     //adulto
                     img.setAttribute('src','https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
                  }else{
                     //velho
                     img.setAttribute('src','https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
                  }
               }
               
            }
         }
      }
      res.style.textalign='center'
      res.innerHTML=`Detectamos ${genero} com ${idade} anos`
      //amostrar a imagem
      res.appendChild(img)
   }
}