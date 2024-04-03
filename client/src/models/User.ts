export type Data = {
	label: string
	value: string
}[]

export interface User {
	name: string
	id: string
	money: number
	bonusFlag: boolean
	data: Data
}
