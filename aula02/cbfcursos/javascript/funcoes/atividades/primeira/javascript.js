const caixa1=window.document.querySelector("#caixa1")
const caixa2=window.document.querySelector("#caixa2")
const btn=window.document.querySelector("#btn_copiar")

const todoscursos=[...window.document.querySelectorAll(".curso")]

todoscursos.map( (el1)=>{
    //ISSO MOSTRA NO CONSOLE DO NAVEGADOR
    el1.addEventListener("click",(evt)=>{
         const curso = evt.target
          //toggle => o elemento ao selecionado faz que se tem o elemento selecionado(CSS) , se não tem ele add(CSS)
         curso.classList.toggle("selecionado")
    })
})