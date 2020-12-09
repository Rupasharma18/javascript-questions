function repeat(operation, num) {
    // SOLUTION GOES HERE
for (let i = 1; i <=num; i++){
console.log( operation())
}
  }
  function operation(){
      return "hello world"
  }
  repeat(operation, 5)
  // Do not remove the line below
  module.exports = repeat