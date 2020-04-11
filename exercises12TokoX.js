function countProfit(shoppers) {
    let listBarang = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ]
    // you can only write your code here!

    var listjual = []

    var stokSepatu = listBarang[0][2]
    var stokZoro = listBarang[1][2]
    var stokUniklooh = listBarang[2][2]
    var pembeliSepatu = []
    var pembeliZoro = []
    var pembeliUniklooh = []
    if(shoppers.length === 0){
        return shoppers
    }

    for(var i = 0; i < shoppers.length;i++){
        if(shoppers[i].product === 'Sepatu Stacattu'){
            if(stokSepatu >= shoppers[i].amount){
                pembeliSepatu.push(shoppers[i].name)
                stokSepatu -= shoppers[i].amount
            }
        }else if(shoppers[i].product === 'Baju Zoro'){
            if(stokZoro >= shoppers[i].amount){
                pembeliZoro.push(shoppers[i].name)
                stokZoro -= shoppers[i].amount
            }
        }else if(shoppers[i].product === 'Sweater Uniklooh'){
            if(stokUniklooh >= shoppers[i].amount){
                pembeliUniklooh.push(shoppers[i].name)
                stokUniklooh -= shoppers[i].amount
            }
        }
    }
    var pembeli
    var sisa
    for(var j = 0; j < listBarang.length; j++){
        if(listBarang[j][0] === 'Sepatu Stacattu'){
            pembeli = pembeliSepatu
            sisa = stokSepatu
            profit = (listBarang[j][2]- stokSepatu) * listBarang[j][1]
        }else if(listBarang[j][0] === 'Baju Zoro'){
            pembeli = pembeliZoro
            sisa = stokZoro
            profit = (listBarang[j][2] - stokZoro) * listBarang[j][1]
        }else if(listBarang[j][0] === 'Sweater Uniklooh'){
            pembeli = pembeliUniklooh
            sisa = stokUniklooh
            profit = (listBarang[j][2] - stokUniklooh) * listBarang[j][1]
        }
        var objectProduct = {};
        objectProduct.product = listBarang[j][0];
        objectProduct.shoppers = pembeli;
        objectProduct.leftOver = sisa;
        objectProduct.totalProfit = profit;
        listjual.push(objectProduct);
    }
    return listjual
  }
  
  // TEST CASES
//   console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
//   console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]