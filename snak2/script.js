let number=Math.floor(Math.random()*100+1);
console.log(number);
let guess=parseInt(prompt('indovina il numero'));
let tentativi=[];

while(!(number===guess)){
     guess=parseInt(prompt('indovina il numero'));
     if(number>guess){
        console.log('Il numero da indovinare è alto!')
     }else{
        console.log('Il numero da indovinare è più basso!')
     }
     tentativi.push(guess);
    }
    console.log(tentativi.length+' è numero di tentativi');
