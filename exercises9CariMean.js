function cariMean(arr){
    var cek = 0
    var jum=''
    for(var i = 0; i < arr.length; i++){
        cek += arr[i]
    }
    jum = cek / arr.length
    return Math.round(jum)
}
console.log(cariMean([1, 2, 3, 4, 5]))
console.log(cariMean([3, 5, 7, 5, 3]))
console.log(cariMean([6, 5, 4, 7, 3]))
console.log(cariMean([1, 3, 3]))
console.log(cariMean([7, 7, 7, 7, 7,]))