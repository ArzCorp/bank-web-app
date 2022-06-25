export const getCurrencyFormat = (amount: number): string =>
	new Intl.NumberFormat('es-mx', {
		currency: 'MXN',
		style: 'currency',
	}).format(amount)
