
/*const c1 = document.querySelector("div#c1")

const msg=()=>{
    alert('mensagem em alerta')
}

// 1 forma c1.addEventListener("click",msg) --------------------



//2 forma ,posso colocar uma função  ----------------------------

/*c1.addEventListener("click",()=>{
    msg()
})*/



//3 forma , aplicando em uma div  -----------------------------------

/*c1.addEventListener("click",(evento)=>{
    const el = evento.target //com target ele mostra no console do naegador a div que disparou
    el.classList.add("destaque")//aqui add uma class em uma div
})*/

//4 FORMA , aplicando em todas as divs  -----------------------------

/*const curso = [...document.querySelectorAll("div.curso")]

curso.map((el)=>{
   el.addEventListener("click",(evt)=>{
    const el = evento.target
    el.classList.add("destaque")
   })
})*/

const c1=document.getElementById('c1')

    //obter o elemento que se quer manipular    

    const c2=document.querySelector('#c2') 

    //a linha acima faz o mesmo efeito da anterior, para outro elemento. 

    const c3=document.querySelector('#c3')      



     const msg=()=>{

        alert('Clicou1')

    }

    c1.addEventListener('click', msg)//pega o click em c1 e executa a função anônima msg=()



    c2.addEventListener('click', ()=>{//pega o click em c2 e executa a funçao anônima que, neste caso, ja está dentro do addEventListener, MAS poderia tb chamar a funçõ msg dentro das chaves que faz o mesmo efeito.

        alert('clicou2')

    })



    c3.addEventListener('click', (evt)=>{

        alert('clicou3')

        console.log(evt.target)//mostra no console o elemento que foi clicado.

        const el=evt.target

        el.classList.add('destaque')//faz o elemento clicado receber a classe "destaque"

    })



    const cursos=[...document.querySelectorAll('.curso')]

    cursos.map((el2)=>{

        el2.addEventListener('click', (evt2)=>{

        const el2=evt2.target

        el2.classList.add('destaque')

        console.log(el2.innerHTML + " foi clicado")

        })

    })




