import { User } from './models/User'

interface Shape {
	x: number
	y: number
}

export interface Circle extends Shape {
	radius: number
}

export interface Rectangle extends Shape {
	width: number
	height: number
}

export interface UserState {
	user: User | null
}

export interface ActionState {
	isGame: boolean
	isLoading: boolean
	isAuth: boolean
}
