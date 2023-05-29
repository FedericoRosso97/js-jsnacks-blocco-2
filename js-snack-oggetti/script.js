
const lettere = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
for(let i=0;i<4;i++){

}

const player={
    Codice:' ',
    Nome:'James',
    Cognome:'Lebron',
    Età:35,
    MediaPunti:0,
    PercentualeSuccesso:0,
    Stoppate:0,
    Tiri:0,
}
player.MediaPunti=Math.floor(Math.random()*51);
player.PercentualeSuccesso=Math.floor(Math.random()*101)
player.Stoppate=Math.floor(Math.random()*31)
player.Tiri=Math.floor(Math.random()*(100-20)+20)
console.log(player)