class ReumeItem {
	name: string
	duration: string
	title: string

	constructor(name: string, duration: string, title: string) {
		this.name = name
		this.duration = duration
		this.title = title
	}
}
class Job extends ReumeItem {
	responsabilities: string[]

	constructor(name: string, duration: string, title: string, responsabilities: string[]) {
		super(name, duration, title)
		this.responsabilities = responsabilities
	}
}
class Education extends ReumeItem {
	degree: string

	constructor(name: string, duration: string, title: string, degree: string) {
		super(name, duration, title)
		this.degree = degree
	}
}
export default {
	jobs: [
		new Job(
			'FamilySearch', 
			'May 2022-Current', 
			'Web Developer', 
			[
				'Work with React, Nodejs, GraphQL', 
				'Assist in the release of a React product', 
				'Work within the constraints of a large organization'
			]
		),
		new Job(
			'Target',
			'August 2020-May 2022',
			'General Merchandize Team Member',
			[
				'Manage the inventory and presentation of an area of the store',
				'Have knowledge of products in my section to be able to help guests',
				'Solve a variety of problems in creative ways',
			],
		),
	],
	education: [
		new Education(
			'Western Governors University',
			'Graduating 2023',
			"Bachelor's of Science",
			'Computer Science',
		),
		new Education(
			'Utah Valley University',
			'2019-2021',
			"Associate's of Science",
			'General Studies',
		),
	],
}
