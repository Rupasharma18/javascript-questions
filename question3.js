function doubleAll(numbers) {
    let result = []
    numbers.map((num )=>{
        let dN = num *2
        result.push(dN)
    })
    return result
  }
  console.log(doubleAll([3,5,6,7]))
  module.exports = doubleAll
  