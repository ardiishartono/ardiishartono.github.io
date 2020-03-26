console.log("PERULANGAN WHILE")
console.log("LOOPING PERTAMA")
var a = 1
while(a <= 20){
    if((a%2)==0){
        console.log(a + ' ' + '-' + ' ' + 'I love coding')
    }
    a = a + 1
}

console.log("LOOPING KEDUA")

var b = 20
while(b > 1){
    if((b%2)==0){
        console.log(b + ' ' + '-' + ' ' + 'I will become fullstack developer')
    }
    b = b - 1
}

console.log("PERULANGAN FOR")
console.log("LOOPING PERTAMA")
for(var c = 1; c <= 20; c++){
    console.log(c + " " + "-" + " " + "I love coding")
}
console.log("LOOPING KEDUA")
for(var d = 20; d > 0; d--){
    console.log(d + " " + "-" +" " + "I will become fullstack developer")
}

console.log("ANGKA GANJIL DAN GENAP")
for(var e = 1; e <=100; e++){
    if((e%2)==0){
        console.log(e + ' ' + 'GENAP')
    }else if((e%2)==1){
        console.log(e + ' ' + 'GANJIL')
    }
}

for(var f = 1; f <= 100; f= f + 2){
    if((f%3)==0){
        console.log(f + ' ' + 'KELIPATAN 3')
    }
}

for(var g = 1; g <= 100; g = g + 5){
    if((g%6)==0){
        console.log(g + ' ' + 'KELIPATAN 6')
    }
}

for(var h = 1; h <= 100; h = h + 9){
    if((h%10)==0){
        console.log(h + ' ' + 'KELIPATAN 10')
    }
}