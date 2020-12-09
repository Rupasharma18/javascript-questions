function countWords(inputWords) {
    // SOLUTION GOES HERE

  return inputWords.reduce((num, count) => (num[count] = ++num[count] || 1, num), {});
  }
var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

console.log(countWords(inputWords))

  module.exports = countWords
  


 