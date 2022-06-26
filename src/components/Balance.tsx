import { getCurrencyFormat } from 'utils/currencyFormat'

interface Props {
	title: string
}

export default function Balance({ title }: Props) {
	const balance: number = 1499970.0
	return (
		<section className="balance">
			<h2 className="balance__title">{title}</h2>
			<p className="balance__amount">{`${getCurrencyFormat(balance)}`}</p>
		</section>
	)
}
