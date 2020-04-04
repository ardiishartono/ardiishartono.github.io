function perkalianUnik(arr){
    var arrhasil = []
    for(var i = 0; i < arr.length; i++){
        var cek = 1
        for(var j = 0; j < arr.length; j++){
            if(i !== j){
                cek *= arr[j]
            }
        }
        arrhasil.push(cek)
    }
    return arrhasil
}
console.log(perkalianUnik([2, 4, 6]))
console.log(perkalianUnik([1, 2, 3, 4, 5]));
console.log(perkalianUnik([1, 4, 3, 2, 5]));
console.log(perkalianUnik([1, 3, 3, 1]));
console.log(perkalianUnik([2, 1, 8, 10, 2]));