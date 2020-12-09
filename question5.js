function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        console.log(submittedUsers)
      // SOLUTION GOES HERE
 return submittedUsers.every(function(submittedUser){
 return goodUsers.some(function(gooduser){
    return gooduser.id===submittedUser.id
 })
})
    };
  }
  var goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ]
  var testAllValid = checkUsersValid(goodUsers)
  console.log( testAllValid([
    { id: 2 },
    { id: 4 },
    { id: 1 }
  ]))
 console.log( testAllValid([
    { id: 1 },
    { id: 2 },
    
  ]))
  
  module.exports = checkUsersValid