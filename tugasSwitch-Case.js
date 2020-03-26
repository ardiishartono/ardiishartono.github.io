var hari = "26"
var bulan = "1"
var tahun = "1969"
var t = ""

switch (hari){
    case "25": tanggal = "25"
    break

    case "26": tanggal = "26"
    break

    case "27": tanggal = "27"
    break
    default:
        console.log("masukan hari")

}

switch (bulan){
    case "1": bul = "Januari"
    break

    case "2": bul = "Februari"
    break
    default:
        console.log("masukan bulan")
}

if(tahun >= 1900 && tahun <= 2200){
    t = tahun
}else{
    console.log("masukan tahun")
}

console.log(hari, bul, t)