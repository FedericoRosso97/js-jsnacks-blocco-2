console.log('ciao')
const array=[];
let somma=0;
let stop=false
while(somma<50){
    let numero=parseInt(prompt('inserisci un numero!'));
    somma=somma+numero;
    array.push(numero);
    console.log(array);
}