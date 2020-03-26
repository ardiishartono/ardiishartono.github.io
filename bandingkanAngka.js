function bandingkanAngka(angka1, angka2){
    if(angka1 < angka2){
        return true
    }else if(angka1 === angka2){
        return -1
    }else{
        return false
    }
}
var angka1 = 17
var angka2 = 2
console.log(bandingkanAngka(angka1,angka2))