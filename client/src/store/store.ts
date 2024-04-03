import { combineReducers, configureStore } from '@reduxjs/toolkit'
import actionSlice from './slices/actionSlice'
import userSlice from './slices/userSlice'

const rootReducer = combineReducers({
	userSlice,
	actionSlice,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
