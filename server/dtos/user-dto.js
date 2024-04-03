module.exports = class UserDto {
	name
	id
	money
	bonusFlag
	data

	constructor(model) {
		this.name = model.name
		this.id = model._id
		this.money = model.money
		this.bonusFlag = model.bonusFlag
		this.data = model.data
	}
}
