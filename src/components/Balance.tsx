import { getCurrencyFormat } from 'utils/currencyFormat'

export default function Balance() {
	const balance: number = 1499970.0
	return (
		<section className="balance">
			<h2 className="balance__title">SALDO DISPONIBLE</h2>
			<p className="balance__amount">{`${getCurrencyFormat(balance)}`}</p>
		</section>
	)
}
