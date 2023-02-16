function butao(){
    var foto = window.document.getElementsByTagName('img')[0]
    var cor = window.document.getElementsByTagName('body')[0]
    var numero = window.document.getElementById('n1')
    var resp = window.document.querySelector('section>div>p#respo')

    var n2 = Number(numero.value)

    if(n2 % 2 == 0){
        resp.innerHTML=`O numero ${n2} é par`
        cor.style.backgroundColor='green'
        foto.src='https://media.glassdoor.com/sqll/320462/par-electrical-contractors-squarelogo-1429864397543.png'
    }else{
        resp.innerHTML=`O numero ${n2} é impar`
        cor.style.backgroundColor='red'
        foto.src='https://static.wixstatic.com/media/ed418f_a2d1b31ea4ec45e586a302a1bff62e25~mv2.png/v1/crop/x_51,y_234,w_1673,h_468/fill/w_522,h_146,al_c,usm_0.66_1.00_0.01/ed418f_a2d1b31ea4ec45e586a302a1bff62e25~mv2.png'
    }


}