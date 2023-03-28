var x = 9

if(x<=0){
   console.log(`o valor ${x} menor ou igual a zero`);
}else{
   if(x>0 && x<=4){
    console.log(`o valor ${x} é maior que zero e menor ou igual a quatro`);
   }else{
     if(x>4 && x<=8){
        console.log(`o valor ${x} é maior que 4 e menor ou igual a 8`);
     }else{
        console.log(`o valor ${x} é maior que 8`);
     }
   }
}

var y = 'jejum'

switch (y) {

    case 'jejum':

           console.log(` 1 =< y <= 5`);

        break;

        case 6,7,8:

            console.log(` 5 < y <= 8`);

         break;

         case 9,10:

            console.log(` 8 < y <= 10`);

         break;

    default:
        console.log('não encontrado');
        break;
}