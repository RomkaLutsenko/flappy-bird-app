import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { checkAuth } from '../store/slices/ActionCreators'
import Game from './Game'
import Login from './Login'
import Menu from './Menu'

function App() {
	const { isAuth } = useAppSelector((state: any) => state.actionSlice)
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(checkAuth())
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<BrowserRouter basename='/flappy-bird'>
			<Routes>
				{isAuth ? (
					<>
						<Route path='/' element={<Menu />} />
						<Route path='/game' element={<Game />} />
					</>
				) : (
					<Route path='/login' element={<Login />} />
				)}
			</Routes>
		</BrowserRouter>
	)
}

export default App
