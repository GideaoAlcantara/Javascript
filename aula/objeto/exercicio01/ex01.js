const amigo = {

    nome:'josé',
    idade:20,
    peso:90,
    sexo:'M',
    Engordar(p = 0){
      
        console.log('engordou')

        this.peso += p
    }
}

amigo.Engordar(2)

console.log( amigo);
console.log('');
console.log(`O peso de ${amigo.nome} é ${amigo.peso}.Kg`);