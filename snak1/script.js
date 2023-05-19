console.log('ciao')
const array=[];
let somma=0;
let stop=false
let i=0;
while(i<array.length || stop==false){
    let numero=prompt('inserisci un numero!');
    somma=somma+numero;
    array.push(numero);
    console.log(array);
    if(somma>50){
       stop=true
    }
    i=i+1;
}