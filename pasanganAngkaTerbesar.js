function pasanganTerbesar(num) {
    var strnum = num +''
    var cek = ''
    var jum
    var jum1
    var jum2
    var jum3
    var jum4
    var jum5
    var jum6

    for(var i = 0; i < strnum.length;i++){
        cek += strnum[i]
    }
    jum = cek[0]+cek[1]
    jum1 = cek[1]+cek[2]
    jum2 = cek[2]+cek[3]
    jum3 = cek[3]+cek[4]
    jum4 = cek[4]+cek[5]
    jum5 = cek[5]+cek[6]
    jum6 = cek[6]+cek[7]
    if(jum <= jum4 || jum >= jum4){
        return Math.max(jum, jum1, jum2, jum3, jum4)
    }else{
        return Math.max(jum, jum1, jum2, jum3, jum4, jum5, jum6,)
    }
  }
  console.log(pasanganTerbesar(641573))
  console.log(pasanganTerbesar(12783456))
  console.log(pasanganTerbesar(910233))
  console.log(pasanganTerbesar(71856421))
  console.log(pasanganTerbesar(79918293))