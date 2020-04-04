function targetTerdekat(arr){
    var posisio = arr.indexOf('o')
    var cek = arr.length
    for(var i = 0; i < cek; i++){
        if(arr[i] == 'x'){
            var jarak = Math.abs(i-posisio)
            if(jarak < cek){
                cek = jarak
            }

        }
    }
    if(arr.indexOf('x') == -1){
        return 0
    }
    return cek
}
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x']));
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x']));
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' ']));
console.log(targetTerdekat([' ', ' ', 'o', ' ']));
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x']));