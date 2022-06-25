import Image from 'next/image'
import { getCurrencyFormat } from 'utils/currencyFormat'

interface Props {
	name: string
	amount: number
	icon: string
}

export default function PaymentRecord({ name, amount, icon }: Props) {
	return (
		<li className="payment-record">
			<span className="payment-record__details">
				<Image
					className="payment-record__icon"
					src={icon}
					width={15}
					height={15}
					alt={`Registro ${name}`}
				/>
				<p className="payment-record__name">{name}</p>
			</span>
			<span className="payment-record__amount">
				{getCurrencyFormat(amount)}
			</span>
		</li>
	)
}
