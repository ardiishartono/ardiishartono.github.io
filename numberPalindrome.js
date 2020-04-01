function angkaPalindrome(num){
    num = num + 1
    for(var i = num;i <= 1100;num++){
        var strnum = num + ''
        var cek = ''
        for(var b = strnum.length - 1; b > -1; b--){
            cek += strnum[b]
            if(num == cek){
                return num
            }
        }
    }
}
console.log(angkaPalindrome(8))
console.log(angkaPalindrome(10))
console.log(angkaPalindrome(117))
console.log(angkaPalindrome(175))
console.log(angkaPalindrome(1000))