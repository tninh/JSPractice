function makeFunctionArray(){
	const arr = []
	//console.log(i)

	for (var i = 0; i < 5; i++){
		arr.push((function(x){
			return function(){console.log(x)}
		})(i))
	}

	//console.log(i)

	return arr
}
 const functionArr = makeFunctionArray()

 //console.log(i)

 functionArr[0]()
