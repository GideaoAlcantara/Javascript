
function carregar(){

    var cor = window.document.getElementsByTagName('body')[0]
    var hh = window.document.querySelector('section>div#hhh')
    var foto = window.document.getElementsByTagName('img')[0]

    var data = new Date()
    var hora = data.getHours()

    var hora = 10

    hh.innerHTML=`Agora são ${hora} horas`

    if(hora >= 0 && hora <= 12){

          foto.src='https://images.pexels.com/photos/789555/pexels-photo-789555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

          cor.style.backgroundColor='#d2a468'

    }else{

        if(hora > 12 && hora <= 18){
            foto.src='https://images.pexels.com/photos/4030348/pexels-photo-4030348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

            cor.style.backgroundColor='#71abe2'
        }else{
            foto.src='https://images.pexels.com/photos/15431151/pexels-photo-15431151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

            cor.style.backgroundColor='#051f38'
        }

    }
}