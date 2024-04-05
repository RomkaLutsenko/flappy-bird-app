import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	TextField,
} from '@material-ui/core'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { Data } from '../models/User'
import {
	postUserData,
	postUserMoney,
	setBonusFlag,
} from '../store/slices/ActionCreators'

const buttonMenuBg = {
	fontWeight: '900',
	height: '50px',
	margin: '0 15px',
	backgroundColor: 'rgba(0, 0, 255, 0.2)',
	color: 'black',
}

function EndBonusDialog(props: {
	showDialog: boolean
	score: number
	bestScore: number
}) {
	const labels: string[] = [
		'Эффективность работы',
		'Прогресс выполнения задач',
		'Качество работы',
		'Скорость достижения целей',
		'Уровень концентрации',
		'Соблюдение сроков',
		'Уровень удовлетворенности результатами',
	]

	const [inputs, setInputs] = useState<Data>(
		Array.from({ length: labels.length }, (_, index) => ({
			label: `${labels[index]}`,
			value: '',
		}))
	)

	const dispatch = useAppDispatch()
	const user = useAppSelector((state: any) => state.userSlice.user)

	const handleChange = (event: any, index: number) => {
		const newInputs = [...inputs]
		newInputs[index].value = event.target.value
		setInputs(newInputs)
	}

	const handleSubmitClick = () => {
		console.log(inputs)
		dispatch(postUserMoney(user.name, 10))
		//TODO: post запрос к серверу для сохранения показателей в БД
		dispatch(postUserData(user.name, inputs))
		dispatch(setBonusFlag(user.name, false))
		window.location.href = '/flappy-bird-app'
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
					Упс, похоже ты проиграл, но ничего заполни эту форму и получи
					гарантированный приз 10 очков ;)
				</DialogContentText>
				{inputs.map((input, index) => (
					<TextField
						key={index}
						autoFocus={index === 0}
						margin='dense'
						id={`input${index + 1}`}
						label={input.label}
						type='text'
						fullWidth
						value={input.value}
						onChange={event => handleChange(event, index)}
					/>
				))}
			</DialogContent>

			<DialogActions>
				<Button
					style={buttonMenuBg}
					onClick={handleSubmitClick}
					color='primary'
				>
					Подтвердить
				</Button>
			</DialogActions>
		</Dialog>
	)
}

export default EndBonusDialog
