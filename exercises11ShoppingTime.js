function shoppingTime(memberId, money) {
    // you can only write your code here!
    var belanja = {}
    var listbarang = [
        ['Sepatu Stacattu', 1000000],
        ['Baju Zoro', 750000],
        ['Baju H&N', 500000],
        ['Sweater Uniklooh', 175000],
        ['Casing Handphone', 50000]
    ]
    if(memberId === undefined && money === undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    if(memberId === ''){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }else{
        belanja['memberId'] = memberId
    }
    if(money <= 50000){
        return 'Mohon maaf, uang tidak cukup'
    }else{
        belanja['money'] = money
    }
    var hargaBarang = 0
    belanja['listPurchased'] = []
    for(var i = 0; i < listbarang.length; i++){
        if(money > listbarang[i][1]){
            belanja['listPurchased'].push(listbarang[i][0])
            hargaBarang += listbarang[i][1]
        }
        belanja['changeMoney'] = money - hargaBarang
    }
    return belanja
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); //Mohon maaf, toko X hanya berlaku untuk member saja