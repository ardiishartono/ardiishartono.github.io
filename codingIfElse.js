var nama = 'ardi'
var peran = 'penyihir'

if(nama === 'ardi'){
    console.log('Halo ardi')
}else{
    console.log('Nama harus diisi!')
}

if(peran === 'penyihir'){
    console.log('Halo ardi, pilih peran mu untuk memulai game!')
}else{
    console.log('Halo ardi, apa peranmu?')
}

if(nama === 'ardi' && peran === 'kesatria'){
    console.log("Selamat datang di Dunia Proxytia," + nama + 
    "\n" + "Halo kesatria ardi, kamu dapat menyerang dengan senjatamu!")
}else{
    console.log("Apa peranmu?")
}

if(nama === 'ardi' && peran === 'tabib'){
    console.log("Selamat datang di Dunia Proxytia," + nama + 
    "\n" + "Halo Tabib ardi, kamu akan membantu temanmu yang terluka.")
}else{
    console.log("nama harus di isi")
}

if(nama === 'ardi' && peran === 'penyihir'){
    console.log("Selamat datang di Dunia Proxytia," + nama + 
    "\n" + "Halo Penyihir ardi, ciptakan keajaiban yang membantu kemenanganmu!")
}else{
    console.log("apa peran mu")
}