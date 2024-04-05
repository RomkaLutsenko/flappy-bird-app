import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Game from '../components/Game'
import Login from '../components/Login'
import Menu from '../components/Menu'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { checkAuth } from '../store/slices/ActionCreators'

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
		<BrowserRouter basename='/flappy-bird-app'>
			<Routes>
				{isAuth ? (
					<>
						<Route path='/' element={<Menu />} />
						<Route path='/game' element={<Game />} />
					</>
				) : (
					<Route path='/' element={<Login />} />
				)}
			</Routes>
		</BrowserRouter>
	)
}

export default App
