let number=Math.floor(Math.random()*100+1);
console.log(number);
let guess;
/*let tentativi=[];*/
let tentativi=0;

while(!(number===guess)){
     guess=parseInt(prompt('indovina il numero tra 1 e 100'));
     if(number>guess){
        console.log('Il numero da indovinare è più alto!')
     }else if(number<guess){
        console.log('Il numero da indovinare è più basso!')
     }
     //tentativi.push(guess);
     tentativi++;
    }
    console.log('Indovinato! '+tentativi+' è il numero di tentativi');
