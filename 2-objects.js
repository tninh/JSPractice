const o = new Object()
o.firstName = 'Jordan'
o.lastName = 'Hayashi'
o.isTeaching = true
o.greet = function(){
	console.log('hi!')
}

const o2 = {}
o.firstName = 'Tri'
o['lastName'] = 'Ninh'
const key = 'isTeaching'
o[key] = true
o['greet'] = function(){
	console.log('hi!')
}

const o3 = {
	firstName: 'Tri',
	lastName: 'Ninh',
	isTeaching: true,
	greet: function() {
		console.log('hi!')
	}, 
	address: {
		street: 'Main St', 
		number: 123,
	},
}
