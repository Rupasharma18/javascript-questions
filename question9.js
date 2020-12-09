var slice = Array.prototype.slice
function logger(namespace) {
  // SOLUTION GOES HERE
  return function logFn() {
    var message = slice.call(arguments)
    console.log(namespace + " " + message);
  }
 
}
var info = logger('INFO:')
info('this is an info message')

var warn = logger('WARN:')
warn('this is a warning message', 'with more info')

module.exports = logger













// function add(x, y) {
//   return x + y
// }

// console.log( add(10, 20) )
// // // var addTen = partiallyApply(add, 10)
// // addTen(20) // => 30
// // addTen(100) // => 110

