function dataHandling2(){
    var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "membaca"]
    var tanggal = input[3]
    var bulan = 5
    var tanggalpisah = tanggal.split("/")
    var tanggaltua = tanggalpisah.join("-")
    var namabulan = ''
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
    input.splice(4, 1, "Pria", "SMA Internasional Metro")
    var potongNama=input[1]
    switch(bulan){
        case 1:
            namabulan = "Januari"
            break
        case 2:
            namabulan = "februari"
            break
        case 3:
            namabulan = "Maret"
            break
        case 4:
            namabulan = "April"
            break
        case 5:
            namabulan = "Mei"
            break
        case 6:
            namabulan = "Juni"
            break
        case 7:
            namabulan = "Juli"
            break
        case 8:
            namabulan = "Agustus"
            break
        case 9:
            namabulan = "September"
            break
        case 10:
            namabulan = "Oktober"
            break
        case 11:
            namabulan = "November"
            break
        case 12:
            namabulan = "Desember"
    }
    console.log(input)
    console.log(namabulan)
    console.log(tanggalpisah)
    console.log(tanggaltua)
    console.log(potongNama.slice(0,15))
}
dataHandling2()
