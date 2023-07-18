const cursosTodos = [...document.getElementsByClassName("curso")]
const c1 = [...document.getElementsByClassName("c1")]
const c2 = [...document.getElementsByClassName("c2")]

console.log(cursosTodos);
console.log(c1);
console.log(c2);

//o map faz pegar elemento por elemento
//podendo colocar c1,c2 ou cursosTodos
c1.map((e)=>{
    
    e.classList.add("destaque")
    //isso faz criar uma class com o nome destaque em cada uma da div
})