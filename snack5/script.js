console.log('ciao');

function lista(classe,word){
  const listElement=document.createElement(classe);
  listElement.innerHTML=word;
  return listElement;
}

const list=document.querySelector('ul');

for(let i=0;i<10;i++){
    elementoLista=lista('li','CIAO!');
    list.append(elementoLista);
    console.log(elementoLista);
}