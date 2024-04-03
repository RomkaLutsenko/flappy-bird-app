import { AxiosResponse } from 'axios'
import $api from '../http'
import { AuthResponse } from '../models/response/AuthResponse'

export default class AuthService {
	static async login(
		name: string,
		password: string
	): Promise<AxiosResponse<AuthResponse>> {
		return $api.post<AuthResponse>('/login', { name, password })
	}

	static async registration(
		name: string,
		password: string
	): Promise<AxiosResponse<AuthResponse>> {
		return $api.post<AuthResponse>('/registration', { name, password })
	}

	static async logout(): Promise<void> {
		return $api.post('/logout')
	}

	static async refresh(): Promise<AxiosResponse<AuthResponse>> {
		return $api.get<AuthResponse>('/refresh')
	}
}
