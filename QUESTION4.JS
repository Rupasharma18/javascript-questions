function getShortMessages(messages) {
    // SOLUTION GOES HERE
    let messageArray = []
    for(let i = 0; i<messages.length; i++){
        messageArray.push(messages[i].message)
    }
    let newArray = []
    for(let l = 0; l<messageArray.length;l++){
    let length = messageArray[l].split( '' ).filter( c => c != ' ' ).length;
    console.log(length)
     if(length< 50){
        newArray.push( messageArray[l])
        
    }
    }
    return newArray
   
  }
  

let ArrOfObject = [
    {message:"this is very.poiuytrertyuiopoiuytredrftgyhujikoliuuuu"},
    {message: 'Esse id amet quis eu.' },
    {message:"this is diffit."},
    {message: 'se ipsum.' },
    {message:"this is ."},
    {message: 'Esse id amet quis eu esse aute officia ipsum.' },
    {message:"this is very difficult."},
    {message: 'Esse id amet quis eu esse aute officia ipsum.' },
    {message:"this is very difficult."},
    {message: 'Esse id amet quis eu esse aute officia ipsum.' },
      
]
console.log(getShortMessages(ArrOfObject))
module.exports = getShortMessages
  