import { createSlice } from '@reduxjs/toolkit'
import { UserState } from '../../types'

const initialState: UserState = {
	user: null,
}

export const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		setUser(state, action) {
			state.user = action.payload
		},
		setUserMoney(state, action) {
			if (state.user) {
				state.user.money = action.payload
			}
		},
	},
})

export default userSlice.reducer
