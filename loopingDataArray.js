var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(){
    var a = ''
    for(var i = 0; i < input.length;i++){
        a += 'nomer id : ' + input[i][0] + '\n'
        a += 'nama lengkap : ' +input[i][1] + '\n'
        a += 'TTL : ' + input[i][2] + ' ' + input[i][3] + '\n'
        a += 'hobby : '+input[i][4] + '\n'
        a += '\n'
    }
    return a
}
console.log(dataHandling())