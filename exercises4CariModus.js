function cariModus (arr){
    var hitung = 0;
    var modus;
    for(var i = 0; i < arr.length; i++){
        var nilaiBaru = 0;
        for(var j = 0; j < arr.length; j++){
            if(arr[i] == arr[j] && i !==j ){
                nilaiBaru++
                if(nilaiBaru>hitung){
                    hitung = nilaiBaru
                    modus = arr[i]
                }
            }
        }
    }
    if(!modus){
        return -1
    }else if(nilaiBaru == arr.length - 1){
        return -1
    }
    return modus
}

console.log(cariModus([10, 4, 5, 2, 4]))
console.log(cariModus([5, 10, 10, 6, 5]))
console.log(cariModus([10, 3, 1, 2, 5]))
console.log(cariModus([1, 2, 3, 3, 4, 5]))
console.log(cariModus([7, 7, 7, 7, 7]))