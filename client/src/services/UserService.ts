import { AxiosResponse } from 'axios'
import $api from '../http'
import { Data, User } from '../models/User'

export default class UserService {
	static async fetchUsers(): Promise<AxiosResponse<User[]>> {
		return $api.get<User[]>('/users')
	}

	static async postUserMoney(
		name: string,
		money: number
	): Promise<AxiosResponse<User>> {
		return $api.post<User>('/money', { name, money })
	}

	static async postUserData(
		name: string,
		data: Data
	): Promise<AxiosResponse<User>> {
		return $api.post<User>('/data', { name, data })
	}

	static async setBonusFlag(
		name: string,
		flag: boolean
	): Promise<AxiosResponse<User>> {
		return $api.post<User>('/flag', { name, flag })
	}
}
