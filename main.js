const task1 = require('./task1.js')
const task2 = require('./task2.js')
const task3 = require('./task3.js')

//------Task 1
// task1
// 	.response('POST', {
// 		task: 1,
// 		result: 'just practice',
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})

//------Task 2

// let res = task2.test().then((data) => {
// 	task1
// 		.response('POST', {
// 			task: 2,
// 			result: data[0] + data[1],
// 		})
// 		.then((data) => console.log(data))
// })

//------Task 3

task1
	.response('POST', {
		task: 3,
		result: task3.get_result('ab2{g}3{a2{fg}}'),
	})
	.then((data) => {
		console.log(data)
	})
