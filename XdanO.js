function xo(str){
var x = 0
var o = 0
for(var index = 0; index < str.length; index++){
    if(str[index] == 'x'){
        x = x + 1
    } else if (str[index] == 'o'){
        o = o + 1
    }
}
if(x == o){
    return true
}else{
    return false
}
}
console.log(xo('xoxoxo'))
console.log(xo('oxooxo'))
console.log(xo('oxo'))
console.log(xo('xxxooo'))
console.log(xo('xoxooxxo'))