const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
	name: { type: String, unique: true, require: true },
	password: { type: String, require: true },
	money: { type: Number, require: true },
	bonusFlag: { type: Boolean, require: true },
	data: { type: Array, require: true },
})

module.exports = model('User', UserSchema)
