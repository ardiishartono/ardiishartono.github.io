/* 1. Newton Second Law
*READ "m" with "600kg"
*READ "a" with "2 time "3"
*STORE "F" with "m" time "a"
*PRINT "F"
*/
var m = 600
var a = 2 * 3
var F = m*a
console.log(F +' '+'N')

/* 2. Tahun Kabisat
*READ "tahun" with any number
*IF tahun modulus 4 equal to 0 and tahun modulus 100 not equal to 0
*PRINT "ini adalah tahun kabisat"
*ELSE IF tahun modulus 4 equal to 0 and 
 tahun modulus 100 equal to 0 and 
 tahun modulus 400 equal to 0
*PRINT "ini bukan tahun kabisat"
END IF
*/
var tahun = 4000;
if(tahun%4==0 && tahun%100!=0){
    console.log("ini adalah tahun kabisat");
}else if(tahun%4==0 && tahun%100==0 && tahun%400==0){
    console.log("ini bukan tahun kabisat");
}

/* 3. Laundry Day
*READ "l" with value "0"
*WHILE l < 20
*PRINT "baju" + l
*IF l equal 20
*PRINT "mari mencuci baju"
*END IF
*END WHILE
*/
var l = 0
while(l < 20){
    l++
    console.log('baju'+ l)
    if(l == 20){
         console.log('mari mencuci baju')
    } 
}
// for(var l = 1; l <= 20; l++){
//     if(l == 20){
//         console.log('mari mencuci baju')
//     }
// }
/* 4 Priksa Kuku 
* FOR every student
* IF "murid" modulus 5 equal to 0
* PRINT "kuku kamu panjang lompat 1x"
* ELSE
* PRINT "bagus kuku kmu rapi"
* END IF
* END FOR
*/
for(var murid = 1; murid <= 40; murid++){
    if(murid%5==0){
        console.log(murid + "kuku kamu panjang lompat 1x")
    } else {
      console.log(murid + "bagus kuku kamu rapi")
    }
}