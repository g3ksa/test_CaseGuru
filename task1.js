class Task1 {
	async response(method, body) {
		let res = await fetch('https://nodus.caseguru.ru/trainee/tasks', {
			method: method,
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		return res.json()
	}
}

module.exports = new Task1()
