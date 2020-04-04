function tentukanDeretAritmatika (arr){
    var cek = 0
    for(var i = 0; i < arr.length - 2; i++){
        if(arr[i+1]-arr[i] == arr[i+2]-arr[i+1]){
            cek = true
        }else{
            cek = false
        }
    }
    return cek
}
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6]));
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24]));
console.log(tentukanDeretAritmatika([2, 4, 6, 8]));
console.log(tentukanDeretAritmatika([2, 6, 18, 54]));
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9]));