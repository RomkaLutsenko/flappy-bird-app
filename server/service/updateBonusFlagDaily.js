const updateBonusFlagDaily = async () => {
	const now = new Date()
	const krskTime = now.toLocaleString('en-US', { timeZone: 'Asia/Krasnoyarsk' })
	const krskHour = new Date(krskTime).getHours()

	// Если текущее время 9:00 по Красноярску, обновляем флаг у всех пользователей
	if (krskHour === 9) {
		try {
			await User.updateMany({}, { $set: { flag: true } })
			console.log('Флаг успешно обновлен у всех пользователей')
		} catch (error) {
			console.error('Ошибка при обновлении флага:', error)
		}
	}
}

module.exports = { updateBonusFlagDaily }
