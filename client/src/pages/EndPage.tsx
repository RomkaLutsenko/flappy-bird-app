import EndBonusDialog from '../components/EndBonusDialog'
import EndDialog from '../components/EndDialog'
import { useAppSelector } from '../hooks/redux'

function EndPage({
	showModal,
	score,
	bestScore,
}: {
	showModal: boolean
	score: number
	bestScore: number
}) {
	const user = useAppSelector(state => state.userSlice.user)

	return (
		<div>
			{user?.bonusFlag ? (
				<EndBonusDialog
					showDialog={showModal}
					score={score}
					bestScore={bestScore}
				/>
			) : (
				<EndDialog showDialog={showModal} score={score} bestScore={bestScore} />
			)}
		</div>
	)
}

export default EndPage
