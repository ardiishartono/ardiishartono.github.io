function konfersiMenit(menit){
var conversijam = menit / 60
var conversimenit = menit % 60
if((menit%60 >=1) && (menit%60 <=9)){
    return Math.floor(conversijam) + ':0' +conversimenit
}else if(menit%60 == 0){
    return Math.floor(conversijam) + ':00'
}else{
    return Math.floor(conversijam) + ':' +conversimenit
}
}
console.log(konfersiMenit(63))
console.log(konfersiMenit(124))
console.log(konfersiMenit(53))
console.log(konfersiMenit(88))
console.log(konfersiMenit(120))