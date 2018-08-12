let i = 50

function makeFunctionArray(){
	const arr = []
	//console.log(i)
	
	for (var i = 0; i < 5; i++){
		arr.push(function(){console.log(i)})
	}
	
	//console.log(i)

	return arr 
}
 const functionArr = makeFunctionArray()
 
 //console.log(i)

 functionArr[0]()