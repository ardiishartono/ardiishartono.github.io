function balikKata(kata){
    var balik = ''
    for(var index = kata.length - 1; index >= 0; index--){
         balik += kata[index]
        }
        return balik
}
console.log(balikKata('Hello world and Coders'))
console.log(balikKata('John Doe'))
console.log(balikKata('I am abook worm'))
console.log(balikKata('Coding is my hobby'))
console.log(balikKata('Super'))