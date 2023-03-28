function somar(){    
                                                                       let x = window.document.getElementById('numero01')

let y = window.document.getElementById('numero02')

let w = window.document.querySelector('p.saida')


let a = Number(x.value)

let b = Number(y.value)

let resp = a / (b*b)

w.innerHTML = resp


}

