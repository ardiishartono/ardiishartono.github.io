function sorting(arrNumber) {
    // code di sini
    for(var i = 0; i < arrNumber.length;i++){
        for(var j = 0; j < arrNumber.length - i - 1;j++){
            if(arrNumber[j] < arrNumber[j+1]){
                var temp = arrNumber[j]
                arrNumber[j] = arrNumber[j + 1]
                arrNumber[j + 1] = temp
            }
        }
    }
    return arrNumber
  }
  
  function getTotal(arrNumber) {
    // code di sini
    var hitung = 0

    for(var i = 0; i < arrNumber.length; i++){
        if(arrNumber[0] === arrNumber[i]){
            hitung++
        }
    }
    var kesimpulan = `Angka paling besar adalah ${arrNumber[0]} dan jumlah kemunculan sebanyak ${hitung} kali`

    if (arrNumber.length === 0) {
        return `''`
    }else{
        return kesimpulan
    }
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''