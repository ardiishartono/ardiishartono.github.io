var rows1 = 5
var a = 1
while( a <= rows1){
    a++
    console.log('*')
}
console.log(' ') //spasi agar console terlihat rapi.
var rows2 = 4
var b = 1
var e = ''
while(b <= rows2){
    for(var c = 1; c <= rows2;c++){
        e += '*'
    }
    b++
    e += '\n'
}
console.log(e)

var rows3 = 10
var h = ''
for(var f = 1; f <= rows3;f++){
    for(var g = rows3; g >= rows3;g--){
        h += '*'
    }
    console.log(h)
}