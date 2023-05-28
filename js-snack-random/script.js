console.log('ciao')
/**tutto sbagliato, da correggere!! */
function random(min,max) {
    let uguali=false;
    let arrayNumber=[];
    while(uguali=false){
        
        let num1=Math.floor((Math.random()*max)+min)
        let num2=Math.floor((Math.random()*max)+min)
        let num3=Math.floor((Math.random()*max)+min)
        
        if(!(num1==num2==num3)){
            arrayNumber.push(num1);
            arrayNumber.push(num2);
            arrayNumber.push(num3);
            
            uguali=true;
        }
    }
    
    return arrayNumber;
}
let gino=random(1,5);
console.log(gino)