console.log('ciao')
let cars=[
    {
        marca:'fiat',
        modello:'panda',
        alimentazione:'benzina',
    },
    {
        marca:'onda',
        modello:'scodaro',
        alimentazione:'benzina',
    },
    {
        marca:'fiat',
        modello:'panda',
        alimentazione:'diesel',
    },
    {
        marca:'fiat',
        modello:'panda',
        alimentazione:'diesel',
    },
    {
        marca:'fiat',
        modello:'panda',
        alimentazione:'diesel',
    },
    {
        marca:'fiat',
        modello:'panda',
        alimentazione:'gpl',
    },
    {
        marca:'fiat',
        modello:'panda',
        alimentazione:'gpl',
    },
    {
        marca:'fiat',
        modello:'panda',
        alimentazione:'gpl',
    },
    {
        marca:'fiat',
        modello:'panda',
        alimentazione:'elettrico',
    },
    {
        marca:'fiat',
        modello:'panda',
        alimentazione:'elettrico',
    },
    {
        marca:'fiat',
        modello:'panda',
        alimentazione:'elettrico',
    },
    {
        marca:'fiat',
        modello:'panda',
        alimentazione:'elettrico',
    },
    {
        marca:'fiat',
        modello:'panda',
        alimentazione:'elettrico',
    },
    {
        marca:'fiat',
        modello:'panda',
        alimentazione:'benzina',
    },
    {
        marca:'fiat',
        modello:'panda',
        alimentazione:'benzina',
    }
   
]
let benzCars=[];
for(let i=0;i<cars.length;i++){
    if(cars[i].alimentazione=='benzina'){
        console.log(cars[i].alimentazione);
       benzCars.push(cars[i])
       
    }
};
console.log(benzCars);
let dieselCars=[];
cars.forEach(function(element){
    if(element.alimentazione=='diesel'){
        console.log(element.alimentazione);
       dieselCars.push(element)
    }
})



console.log(dieselCars);
    

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);