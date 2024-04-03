import { Button, TextField } from '@material-ui/core'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../hooks/redux'
import { login, registration } from '../store/slices/ActionCreators'

const Login: React.FC = () => {
	const [name, setName] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const navigate = useNavigate()

	const dispatch = useAppDispatch()

	const handleLogin = () => {
		navigate('/')
		dispatch(login(name, password))
	}

	const handleRegistration = () => {
		navigate('/')
		dispatch(registration(name, password))
	}

	return (
		<div
			style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			<TextField
				label='Имя'
				type='text'
				variant='outlined'
				value={name}
				onChange={e => setName(e.target.value)}
				style={{
					backgroundColor: 'rgba(0, 0, 255, 0.2)',
					width: '300px',
					margin: '20px',
				}}
			/>
			<TextField
				label='Пароль'
				type='password'
				variant='outlined'
				value={password}
				onChange={e => setPassword(e.target.value)}
				style={{ backgroundColor: 'rgba(0, 0, 255, 0.2)', width: '300px' }}
			/>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					gap: '10px',
					marginBottom: '10px',
					justifyContent: 'space-around',
					marginTop: '30px',
				}}
			>
				<Button
					variant='contained'
					onClick={handleLogin}
					style={{ backgroundColor: 'rgba(0, 0, 255, 0.2)' }}
				>
					Логин
				</Button>
				<Button
					variant='contained'
					onClick={handleRegistration}
					style={{ backgroundColor: 'rgba(0, 0, 255, 0.2)' }}
				>
					Регистрация
				</Button>
			</div>
		</div>
	)
}

export default Login
