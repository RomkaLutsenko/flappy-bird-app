import { createSlice } from '@reduxjs/toolkit'
import { ActionState } from '../../types'

const initialState: ActionState = {
	isGame: false,
	isLoading: false,
	isAuth: false,
}

export const actionSlice = createSlice({
	name: 'action',
	initialState: initialState,
	reducers: {
		setAuth(state, action) {
			state.isAuth = action.payload
		},
		setGame(state, action) {
			state.isGame = action.payload
		},
		setLoading(state, action) {
			state.isLoading = action.payload
		},
	},
})

export default actionSlice.reducer
