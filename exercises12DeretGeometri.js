function tentukanDeretGeometri(arr){
    var cek = 0
    for(var i = 0; i < arr.length - 2; i++){
        if(arr[i]/arr[i+1] == arr[i+1]/arr[i+2]){
            cek = true
        }else{
            cek = false
        }
    }
    return cek
}
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81]));
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32]));
console.log(tentukanDeretGeometri([2, 4, 6, 8]));
console.log(tentukanDeretGeometri([2, 6, 18, 54]));
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9]));