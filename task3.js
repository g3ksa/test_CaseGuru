class Task3 {
	get_result(s) {
		let stack = []
		let result = ''
		for (let i = 0; i < s.length; i++) {
			if (s[i] === '}') {
				let cur = ''
				while (stack[stack.length - 1] !== '{') {
					cur = stack.pop() + cur
				}
				stack.pop()
				let count = ''
				while (stack.length && !isNaN(stack[stack.length - 1])) {
					count = stack.pop() + count
				}
				count = parseInt(count)
				stack.push(cur.repeat(count))
			} else {
				stack.push(s[i])
			}
		}
		while (stack.length) {
			result = stack.pop() + result
		}
		return result
	}
}

module.exports = new Task3()
