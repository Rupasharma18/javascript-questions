function arrayMap(arr,fn) {
    //SOLUTION GOES HERE
   return arr.reduce(function (eptArr, val) {
    eptArr.push(val * 2);
        return eptArr;
      }, []);
  }
  var nums = [1,2,3,4,5]
console.log(arrayMap(nums))
module.exports = arrayMap;
  