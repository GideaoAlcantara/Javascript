//EXEMPLO 01

/*const cursos = ['react','html','css','javascript']

cursos.map((el,pos)=>{
    console.log(`curso : ${el}  ||  posição : ${pos}`);
})
/*
 * O RESULTADO 
 
curso : react  ||  posição : 0
curso : html  ||  posição : 1
curso : css  ||  posição : 2
curso : javascript  ||  posição : 3

 
 */

//EXEMPLO 02 COM HTML

/*let el = window.document.getElementsByTagName('div')
console.log(el);
/**
 * NO NAVEGAADOR FICOU ASSIM CONSOLE;
 * 
 * HTMLCollection(6)
 * 0: div.01
 * 1: div.02
 * 2: div.03
 * 3: div.04
 * 4: div.05
 * 5: div.06
 * length: 6
 * [[Prototype]]:
 */

//1 passo é transformar o el em um intaravo para não dar erro

//pode fazer assim 
//let el2 = [...el] + CONST EL = WINDOW....

//ou assim o CONST EL vira LET EL e o LET EL2 =[...EL] vira só EL = [...EL] ,sendo assim diminue a a variavel.
//NESSE JEITO NÃO DEU ERRO

/*el = [...el]

el.map((e , i)=>{
   console.log(e);  
})

/**NO NAVEGADOR EM CONSOLE FICOU ASSIM APÓS ISSO
 * 
 * HTMLCollection(6) [div.01, div.02, div.03, div.04, div.05, div.06]
 * 
 *  <div class="01">HTML</div>
    <div class="02">CSS</div>
    <div class="03">JAVASCRIPT</div>
    <div class="04">PHP</div>
    <div class="05">REACT</div>
    <div class="06">MYSOL</div>
 */

//EXEMPLO 3

/*let el = window.document.getElementsByTagName('div')
//AQUI NESSE EXEMPLO EXISTE UMA SUBSTITUIÇÃO DE ELEMENTO COM O INNERHTML
el = [...el]
console.log(el);

el.map((e , i)=>{ 
   e.innerHTML='TESTE'
})

/**
 * NO NAVEGADOR NORMAL FICA
 * 
 * <div class="01">TESTE</div>
    <div class="02">TESTE</div>
    <div class="03">TESTE</div>
    <div class="04">TESTE</div>
    <div class="05">TESTE</div>
    <div class="06">TESTE</div>
 */

//EXEMPLO 4

//const el = document.getElementsByTagName('div')
//NO CALL VAI FICAR O ARRAY E A CHAMADA ,mas o pro usar function
//const val = Array.prototype.map.call(el,({innerHTML})=> 
   //AQUI ELE VAI RETORNAR
  // innerHTML
//)

//console.log(val);

/**
 * NO NAVEGADOR
 * 
 * Array(6)
 * 0: "HTML"
 * 1: "CSS"
 * 2: "JAVASCRIPT"
 * 3: "PHP"
 * 4: "REACT"
 * 5: "MYSOL"length: 
 * 6[[Prototype]]: Array(0)
 */

//EEXEMPLO 05
//recebe um valor e depois converti para inteiro
const converterInt=(e)=>parseInt(e)
//aqui em baixo o map converte as string em numero inteiro
let num=['1','2','3','4','5'].map(converterInt)

console.log(num);

console.log(num);

//parei no tempo 20 minutos e 50 segundos