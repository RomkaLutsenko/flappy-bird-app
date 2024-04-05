import { Button, Grid, Typography } from '@material-ui/core'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { logout } from '../store/slices/ActionCreators'
import { actionSlice } from '../store/slices/actionSlice'

const buttonMenuBg = {
	fontWeight: '900',
	height: '100px',
	backgroundColor: 'rgba(0, 0, 255, 0.2)',
	color: 'black',
}

const { setGame } = actionSlice.actions

const Menu: React.FC = () => {
	const user = useAppSelector((state: any) => state.userSlice.user)
	const dispatch = useAppDispatch()

	const handleGameClick = () => {
		dispatch(setGame(true))
		window.location.href = '/flappy-bird-app/game'
	}

	const handleLogout = () => {
		dispatch(logout())
	}

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				maxWidth: '300px',
			}}
		>
			<div style={{ padding: '40px 0' }}>
				<Typography variant='h5' style={{ fontWeight: '900' }}>
					Здравствуйте, {user.name ? user.name : 'asd'}
				</Typography>
				<Typography
					style={{ fontSize: '18px', fontWeight: '400', textAlign: 'center' }}
				>
					У вас {user.money ? user.money : 'пока что 0'} монет
				</Typography>
			</div>

			<Grid container spacing={6}>
				<Grid item xs={6}>
					<Button variant='contained' fullWidth style={buttonMenuBg}>
						Магазин (В разработке)
					</Button>
				</Grid>
				<Grid item xs={6}>
					<Button
						onClick={handleGameClick}
						variant='contained'
						fullWidth
						style={buttonMenuBg}
					>
						Играть
					</Button>
				</Grid>
				<Grid item xs={6}>
					<Button variant='contained' fullWidth style={buttonMenuBg}>
						Информация (В разработке)
					</Button>
				</Grid>
				<Grid item xs={6}>
					<Button
						onClick={handleLogout}
						variant='contained'
						fullWidth
						style={buttonMenuBg}
					>
						Выйти
					</Button>
				</Grid>
			</Grid>
		</div>
	)
}

export default Menu
