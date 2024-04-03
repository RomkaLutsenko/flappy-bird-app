import axios from 'axios'
import { API_URL } from '../../http'
import { Data, User } from '../../models/User'
import { AuthResponse } from '../../models/response/AuthResponse'
import AuthService from '../../services/AuthService'
import UserService from '../../services/UserService'
import { AppDispatch } from '../store'
import { actionSlice } from './actionSlice'
import { userSlice } from './userSlice'

const { setUser } = userSlice.actions
const { setAuth } = actionSlice.actions

export const login =
	(name: string, password: string) => async (dispatch: AppDispatch) => {
		try {
			const response = await AuthService.login(name, password)
			localStorage.setItem('token', response.data.accessToken)
			dispatch(setAuth(true))
			dispatch(setUser(response.data.user))
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				console.log(error.response?.data?.message)
			} else {
				console.log('Unknown error occurred')
			}
		}
	}

export const registration =
	(name: string, password: string) => async (dispatch: AppDispatch) => {
		try {
			const response = await AuthService.registration(name, password)
			localStorage.setItem('token', response.data.accessToken)
			dispatch(setAuth(true))
			dispatch(setUser(response.data.user))
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				console.log(error.response?.data?.message)
			} else {
				console.log('Unknown error occurred')
			}
		}
	}

export const logout = () => async (dispatch: AppDispatch) => {
	try {
		AuthService.logout()
		localStorage.removeItem('token')
		dispatch(setAuth(false))
		dispatch(setUser({} as User))
	} catch (error: unknown) {
		if (axios.isAxiosError(error)) {
			console.log(error.response?.data?.message)
		} else {
			console.log('Unknown error occurred')
		}
	}
}

export const checkAuth = () => async (dispatch: AppDispatch) => {
	try {
		const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
			withCredentials: true,
		})
		localStorage.setItem('token', response.data.accessToken)
		dispatch(setAuth(true))
		dispatch(setUser(response.data.user))
	} catch (error: unknown) {
		if (axios.isAxiosError(error)) {
			console.log(error.response?.data?.message)
		} else {
			console.log('Unknown error occurred')
		}
	}
}

export const postUserMoney =
	(name: string, money: number) => async (dispatch: AppDispatch) => {
		try {
			await UserService.postUserMoney(name, money)
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				console.log(error.response?.data?.message)
			} else {
				console.log('Unknown error occurred')
			}
		}
	}

export const postUserData =
	(name: string, data: Data) => async (dispatch: AppDispatch) => {
		try {
			await UserService.postUserData(name, data)
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				console.log(error.response?.data?.message)
			} else {
				console.log('Unknown error occurred')
			}
		}
	}

export const setBonusFlag =
	(name: string, flag: boolean) => async (dispatch: AppDispatch) => {
		try {
			await UserService.setBonusFlag(name, flag)
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				console.log(error.response?.data?.message)
			} else {
				console.log('Unknown error occurred')
			}
		}
	}
