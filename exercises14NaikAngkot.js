function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    
    var angkot = [{},{}]
    var asal = '';
    var tujuan = '';

    if(arrPenumpang.length === 0){
        return arrPenumpang
    }
    
    for (var i = 0; i<arrPenumpang.length; i++) {
        angkot[i].penumpang = arrPenumpang[i][0];
        angkot[i].naikDari = arrPenumpang[i][1];
        angkot[i].tujuan = arrPenumpang[i][2];
  
        for (var j = 0; j<arrPenumpang[i].length; j++) {
            asal = arrPenumpang[i][j-1];
            tujuan = arrPenumpang[i][j];
            var jarak = 0;
                for (var k=0; k<rute.length; k++) {
                    if (rute[k] === asal) {
                        for (var l=k+1; l<rute.length; l++) {
                            jarak += 1;
                            if (rute[l] === tujuan) {
                                var bayar = jarak * 2000;
                                angkot[i].bayar = bayar;
                            }
                        }
                    }
                }
            }
        }
  return angkot;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]