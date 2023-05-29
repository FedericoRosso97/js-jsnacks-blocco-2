
const submmitButton=document.querySelector('.bottoneIngrediente');
const imageButton=document.querySelector('.bottoneImmagine');
const lista=document.querySelector('ul');

arrayIngredienti=[];

let counter=0;
let generato=false;
submmitButton.addEventListener('click',function(){
    
    if(counter<11 && !generato){
        let input = document.getElementById("ingredienti");

        console.log(ingredienti);
    
        //const lista=document.querySelector('ul');
        const listElements=document.createElement('li')
        
        arrayIngredienti.push(input.value);
        
        listElements.innerHTML=input.value
        lista.append(listElements);

        counter++;
        input.value=' ';
    }else{
        alert('raggiunti ingredienti massimi')
    }
    
})

imageButton.addEventListener('click',function(){
    if(counter>2){
        generato=true;
       console.log('ciao!')
       lista.classList.add('invisible');
       document.querySelector('.immaginiPiatto').innerHTML = '<img src="https://source.unsplash.com/700x400/?meal" alt="Random dish image">';
       const Ricetta=document.querySelector('.ricetta')
       for(let i=0;i<arrayIngredienti.length;i++){
          Ricetta.innerHTML +='<p>'+arrayIngredienti[i]+'</p>';
       }
    }
})
