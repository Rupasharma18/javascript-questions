function duckCount() {
    // SOLUTION GOES HERE
    function isDuck(arg) {
        return Object.prototype.hasOwnProperty.call(arg, "quack")
    }
    function countDuck(args, index, number) {
        if (index >= args.length) {
            return number
         }
        else {
            return countDuck(args, index + 1, number + (isDuck(args[index]) ? 1 : 0))
        }
    }

    return countDuck(arguments, 0, 0)
    
  }

var notDuck ={0: 'argument0',1: 'argument1',}
var duck = { quack: true}
var duck1 = { quack: true}
var duck2 = { l: false}

console.log(duckCount(duck,duck1,duck2,notDuck))
  module.exports = duckCount
  