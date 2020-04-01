function hitungJumlahKata(kalimat){
    var jdarray = kalimat.split(" ")
    var jumlah = jdarray.length
    return jumlah

}
console.log(hitungJumlahKata('I have a dream'));
console.log(hitungJumlahKata('Never eat shredded wheat or cake'));
console.log(hitungJumlahKata('A song to sing'));
console.log(hitungJumlahKata('I'));
console.log(hitungJumlahKata('I believe I can code'));