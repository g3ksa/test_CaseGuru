const db = require('./Database/db.js')

class Task2 {
	async test() {
		const times = {}
		const cnts = {}
		let maxTime = 0,
			maxId

		const orders = await db('orders')
			.where('statuscode', 'complete')
			.whereBetween('createdat', [
				new Date(2022, 5, 0),
				new Date(2022, 7, 31),
			])
			.then((statuses) => statuses)

		orders.forEach((val) => {
			if (times[val.managerid] === undefined) {
				times[val.managerid] = val.processing_time
				cnts[val.managerid] = 1
			} else {
				times[val.managerid] += val.processing_time
				cnts[val.managerid] += 1
			}
		})

		for (let id in times) {
			if (times[id] / cnts[id] > maxTime) {
				maxTime = times[id] / cnts[id]
				maxId = id
			}
		}
		return [maxId, Math.round(maxTime)]
	}
}

module.exports = new Task2()
