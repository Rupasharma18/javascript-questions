function Spy(target, method) {
    // SOLUTION GOES HERE
    let spyCount = { count : 0 }
	let methods = target[method]
    target[method]= function (){
		spyCount.count++
		return methods.apply(this, arguments)
	}
	return spyCount
  }

var spy = Spy(console, 'warn')
var spy = Spy(console, 'warn')
console.warn('calling console')
console.warn('calling console')
console.log(spy.count)
module.exports = Spy
  