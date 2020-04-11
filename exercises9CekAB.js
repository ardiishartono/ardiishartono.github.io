function checkAB(num) {
    // you can only write your code here!
    var cekA=''
    var cekB=''
    for(var i = 0; i < num.length; i++){
        if(num[i] === 'a'){
            cekA = i
        }else if(num[i] === 'b'){
            cekB = i
        }
        if(cekA - cekB === 4 || cekB - cekA === 4){
            return true
        }
    }
    return false
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false