function groupAnimals(animals) {
    var list = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','F','W','X','Y','Z']
    var hewan = []
    for(var i = 0; i < list.length; i++){
        var tampungHewan = []
        for(var j = 0; j <  animals.length; j++){
            if(animals[j][0] == list[i]){
                tampungHewan.push(animals[j])
            }
        }
        if(tampungHewan != ''){
            hewan.push(tampungHewan)
        }
    }
    return hewan
}
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']))
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]))