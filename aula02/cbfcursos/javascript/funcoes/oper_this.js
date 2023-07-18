
function aluno(nome,nota){
     //THIS = UMA VARIAVEL DECLARADA PARA FUNC.ALUNO EM QUE RECEBE O VALOR DO PARAMETRO NOME
    this.nome=nome

    this.nota=nota

    console.log(nome);
    console.log(nota);

    //fazendo com uma funcao anonima

    this.dados_anonimos=()=>{
           //setTimeout gera um atraso na execução
           //nessa this.nome e this.nota fica vazia a informação ,pois a funcao dados_aonimo ela é independente da funcao aluno
        setTimeout(function(){

              console.log(this.nome);
              console.log(this.nota);

        },2000 )//aqui é tempo que defino no setTimeout, 2000 = 2 segundos
    }

    //corrigindo o erro

    this.dados_arrow=()=>{
        //para corrigir o erro usa erofunction( => ) no lugar de function
     setTimeout(()=>{

           console.log(this.nome);
           console.log(this.nota);

     },2000 )//aqui é tempo que defino no setTimeout, 2000 = 2 segundos
 }
}



const ali = new aluno('gilberto',10)

ali.dados_anonimos()

ali.dados_arrow()