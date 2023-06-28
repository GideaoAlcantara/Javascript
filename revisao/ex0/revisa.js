function contar() {

    let prime = window.document.getElementById('inumb')
    let segun = window.document.querySelector('input#iinumb')
    let re01 = window.document.getElementById('rep01')
    let re02 = window.document.getElementById('rep02')
    let rpp = window.document.getElementById('rpp')

    var tag = window.document.createElement('img');
    tag.setAttribute('src','https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    tag.setAttribute('width','300px')
    rpp.appendChild(tag)

    let a1 = Number(prime.value)
    let a2 = Number(segun.value)

    if (prime.value == 0 && segun.value == 0) {
        window.alert('[ERRO] Digite os valores')
    } else {
        if (a2 >= a1) {
                do {

                     re01.innerHTML += `${a1} `
                     a1 += 1

                } while (a2 >= a1);
        } else {
            if (a2 <= a1) {
                do {

                    re01.innerHTML += `${a1} `
                    a1 -= 1

               } while (a2 <= a1);
            }
        }
    }

   switch (a1) {
    case a1%2==0:
             re02.innerHTML+= `o valor que inicia é par`
        break;

        case a1%2==1:
            re02.innerHTML+= `o valor que inicia é impar`
        break;
      
    default:
        `[ERRO]`
        break;
   }
             
}
