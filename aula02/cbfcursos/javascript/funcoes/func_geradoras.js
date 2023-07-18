//EXEMPLO 01

function* cores(){

    yield 'vermelho'
    yield 'verde'
    yield 'azul'
}

const exemplo = cores()

console.log(exemplo.next().value);
console.log(exemplo.next().value);
console.log(exemplo.next().value);

//EXEMPLO 02

//1 passo

function* perguntas() {
   const nome = yield 'qual seu nome ?'
   const peso = yield 'qual seu peso ?'
   const altura = yield 'qual sua altura ?'

   return `Olá ${nome} , seu IMC é ${peso/(altura*altura)}`
}

//2 passo

const itc = perguntas()

//3 passo

console.log(itc.next().value);//esse aqui é o que mostra o return

console.log(itc.next('bernado').value);// esse aqui mostra a pergunta e salva o dado 'bernado' no const nome.
console.log(itc.next('60').value);
console.log(itc.next('1.8').value);


