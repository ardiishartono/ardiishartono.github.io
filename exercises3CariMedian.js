function cariMedian(arr){
var nilai
var hasil
if(arr.length % 2 != 0){
    nilai = Math.floor(arr.length/2)
    hasil = arr[nilai]
}else if(arr.length % 2 == 0){
    nilai = Math.floor(arr.length/2)
    hasil = (arr[nilai] + arr[nilai-1])/2
}
return hasil
}

console.log(cariMedian([1, 2, 3, 4, 5]))
console.log(cariMedian([1, 3, 4, 10, 12, 13]))
console.log(cariMedian([3, 4, 7, 6, 10]))
console.log(cariMedian([1, 3, 3]))
console.log(cariMedian([7, 7, 8, 8]))