module.exports = function(namespace) {
    // SOLUTION GOES HERE
    console.log(namespace)
    return console.log.bind(console, namespace)
  }
  


  