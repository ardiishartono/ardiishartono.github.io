console.log('Tugas1')
function shoutOut(){
    return 'Halo Function'
}
console.log(shoutOut())

console.log('Tugas2')
function calculateMultiply(num1, num2){
    return num1 * num2
}
var num1 = 5
var num2 = 6
var hasilPerkalian = calculateMultiply(num1,num2)
console.log(hasilPerkalian)

console.log('Tugas3')
function processSentence(name,age,address,hobby){
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}.`
}
var name = 'ardi'
var age = 15
var address = 'Jln. Malioboro, Yogjakarta'
var hobby = 'gaming'
var fullSentence = processSentence(name,age,address,hobby)
console.log(fullSentence)