let pesoTot=0;
let lengthTot=0;
let peperoni=[];

for(let i=0;i<10;i++){
    const peperone={
        varietà:' ',
         peso:0,
         lunghezza:0,
     }
     peperone.peso=Math.floor(Math.random()*50+1);
     peperone.lunghezza=Math.floor(Math.random()*100+1);
    peperoni.push(peperone);
    pesoTot+=peperoni[i].peso;
    lengthTot+=peperoni[i].lunghezza;
}
console.log(peperoni);
console.log(pesoTot);
console.log(lengthTot);