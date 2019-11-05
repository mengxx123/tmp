const BigNumber = require('bignumber.js')

// let x = new BigNumber('2')
// let y = new BigNumber('3')
// let result = x.times(y)
// console.log('x', result.toString(10, 20))

// x.plus(0.1)  // 加法
// x.minus(0.1)  // 减法
// x.times(0.1)  // 乘法
// x.div(0.1)  // 除法
// x.mod(3)  // 取模/取余

// function jie(num) {
//   let result = new BigNumber(1)
//   for (let i = 2; i <= num; i++) {
//     result = result.times(i)
//   }
//   // result = result.plus(1)
//   return result.toString(10, 20)
// }
// console.log(jie(5000))


// let map = {}
// function fab(num) {
//   if (num === 1) {
//     return new BigNumber(0)
//   }
//   if (num === 2) {
//     return new BigNumber(1)
//   }
//   map[1] = new BigNumber(0)
//   map[2] = new BigNumber(1)

//   for (let i = 3; i <= num; i++) {
//     map[i] = map[i - 1].plus(map[i - 2])
//     delete map[i - 2]
//   }
//   return map[num]
// }
// let startTime = new Date().getTime()
// console.log(fab(10000).toString(10, 20))
// console.log(new Date().getTime() - startTime)

let exp = '123456789012345678901234567890'
let match = exp.match(/^\s+?[\d]+$/)
console.log('match', match)

