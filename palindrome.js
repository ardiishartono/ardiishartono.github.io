function palindrome(kata){
    var balik = ''
    for(var j = kata.length - 1; j >= 0; j--){
        balik += kata[j]
        }
        if(balik == kata){
            return true
        }else{
            return false
        }
}
console.log(palindrome('katak'))
console.log(palindrome('blanket'))
console.log(palindrome('civic'))
console.log(palindrome('kasur rusak'))
console.log(palindrome('mister'))