const UserModel = require('../models/user-model')
const uuid = require('uuid')
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dto')
const bcrypt = require('bcrypt')
const ApiError = require('../exceptions/api-error')

class UserService {
	async registration(name, password) {
		const candidate = await UserModel.findOne({ name })
		if (candidate) {
			throw ApiError.BadRequest(`Пользователь с именем ${name} уже существует `)
		}
		const hashPassword = await bcrypt.hash(password, 3)

		const user = await UserModel.create({
			name,
			password: hashPassword,
			money: 0,
			bonusFlag: true,
			data: [],
		})

		const userDto = new UserDto(user) // name, id
		const tokens = tokenService.generateTokens({ ...userDto })
		await tokenService.saveToken(userDto.id, tokens.refreshToken)

		return {
			...tokens,
			user: userDto,
		}
	}

	async login(name, password) {
		const user = await UserModel.findOne({ name })
		if (!user) {
			throw ApiError.BadRequest('Пользователь с таким именем не найден')
		}
		const isPassEquals = await bcrypt.compare(password, user.password)
		if (!isPassEquals) {
			throw ApiError.BadRequest('Неверный пароль')
		}
		const userDto = new UserDto(user)
		const tokens = tokenService.generateTokens({ ...userDto })

		await tokenService.saveToken(userDto.id, tokens.refreshToken)

		return {
			...tokens,
			user: userDto,
		}
	}

	async logout(refreshToken) {
		const token = await tokenService.removeToken(refreshToken)

		return { token }
	}

	async refresh(refreshToken) {
		if (!refreshToken) {
			throw ApiError.UnauthorizedError()
		}
		const userData = tokenService.validateRefreshToken(refreshToken)
		const tokenFromDb = await tokenService.findToken(refreshToken)

		if (!userData || !tokenFromDb) {
			throw ApiError.UnauthorizedError()
		}

		const user = await UserModel.findById(userData.id)
		const userDto = new UserDto(user)
		const tokens = tokenService.generateTokens({ ...userDto })
		await tokenService.saveToken(userDto.id, tokens.refreshToken)

		return {
			...tokens,
			user: userDto,
		}
	}

	async getAllUsers() {
		const users = await UserModel.find()
		return users
	}

	async setUserMoney(name, money) {
		const user = await UserModel.findOne({ name })
		if (!user) {
			throw ApiError.BadRequest('Пользователь с таким именем не найден')
		}
		const userDto = new UserDto(user)

		await UserModel.findByIdAndUpdate(userDto.id, { $inc: { money: money } })
	}

	async setUserData(name, data) {
		const user = await UserModel.findOne({ name })
		if (!user) {
			throw ApiError.BadRequest('Пользователь с таким именем не найден')
		}
		const userDto = new UserDto(user)

		await UserModel.findByIdAndUpdate(userDto.id, { $push: { data: data } })
	}

	async setBonusFlag(name, flag) {
		const user = await UserModel.findOne({ name })
		if (!user) {
			throw ApiError.BadRequest('Пользователь с таким именем не найден')
		}
		const userDto = new UserDto(user)

		await UserModel.findByIdAndUpdate(
			userDto.id,
			{ $set: { bonusFlag: flag } },
			{ new: true }
		)
	}
}

module.exports = new UserService()
