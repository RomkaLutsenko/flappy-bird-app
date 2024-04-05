import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
} from '@material-ui/core'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { postUserMoney } from '../store/slices/ActionCreators'

const buttonMenuBg = {
	fontWeight: '900',
	height: '50px',
	margin: '0 15px',
	backgroundColor: 'rgba(0, 0, 255, 0.2)',
	color: 'black',
}

function EndDialog(props: {
	showDialog: boolean
	score: number
	bestScore: number
}) {
	const dispatch = useAppDispatch()
	const user = useAppSelector((state: any) => state.userSlice.user)

	const handleToMainMenuClick = () => {
		dispatch(postUserMoney(user.name, props.score))
		window.location.href = '/flappy-bird-app'
	}

	const handleRetryClick = () => {
		dispatch(postUserMoney(user.name, props.score))
		window.location.reload()
	}

	return (
		<Dialog
			open={props.showDialog}
			disableEscapeKeyDown
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
		>
			<DialogContent>
				<DialogContentText id='alert-dialog-description'>
					Результат: {props.score} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Лучший:{' '}
					{props.bestScore}
				</DialogContentText>
			</DialogContent>

			<DialogActions>
				<Button
					style={buttonMenuBg}
					onClick={handleToMainMenuClick}
					color='primary'
				>
					В главное меню
				</Button>
				<Button style={buttonMenuBg} onClick={handleRetryClick} color='primary'>
					Попробовать ещё
				</Button>
			</DialogActions>
		</Dialog>
	)
}

export default EndDialog
