function digitPerkalianMinimum (angka){
    var arr = []

    for(var i = 0; i <= angka; i++){
        for (var j = 0; j <= angka; j++){
            if(i*j === angka){
                var gabung = i.toString() + j.toString()
                arr.push(gabung)
            }
        }
    }
    var minimum = arr[0].length
    for(var k = 0; k < arr.length; k++){
        if(arr[k].length < minimum){
            minimum = arr[k].length
        }
    }
    return minimum
}
console.log(digitPerkalianMinimum(24));
console.log(digitPerkalianMinimum(90));
console.log(digitPerkalianMinimum(20));
console.log(digitPerkalianMinimum(179));
console.log(digitPerkalianMinimum(1));