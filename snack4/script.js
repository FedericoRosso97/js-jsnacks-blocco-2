const parolaUno=(document.getElementById("parolaUno")).value;
const parolaDue=(document.getElementById("parolaDue")).value;

function lenght(parolaA,parolaB){
    if(parolaA.lenght==parolaB.lengt){
        console.log(parolaA + parolaB)
    }else if(parolaA.lenght>parolaB.lengt){
        console.log(parolaA)
    }else if(parolaA.lenght<parolaB.lengt){
        console.log(parolaB)
    }
}

const button=document.querySelector('button');
button.addEventListener('click', function(){
    const parolaUno=(document.getElementById("parolaUno")).value;
    const parolaDue=(document.getElementById("parolaDue")).value;
    console.log(lenght(parolaUno,parolaDue));
}

)
