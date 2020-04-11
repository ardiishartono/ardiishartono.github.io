function ubahHuruf (kata){
    var alvabet = 'abcdefghijkmnopqrstuvwxyz'
    var alvaSelanjutnya = ''

    for(var i = 0; i < kata.length; i++){
        for(var j = 0; j < alvabet.length; j++){
            if(kata[i] === alvabet[j]){
                alvaSelanjutnya += alvabet[j+1]
            }
        }
    }
    return alvaSelanjutnya
}

console.log(ubahHuruf('wow'))
console.log(ubahHuruf('developer'))
console.log(ubahHuruf('javascript'))
console.log(ubahHuruf('keren'))
console.log(ubahHuruf('semangat'))