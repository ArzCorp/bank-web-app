import Button from 'components/Button'
import { getCurrencyFormat } from 'utils/currencyFormat'
import PaymentRecord from './PaymentRecord'

export default function Payment() {
	return (
		<section className="payment">
			<h2 className="payment__title">Tu próximo pago</h2>
			<p className="payment__amount">{getCurrencyFormat(28860.0)}</p>
			<div className="payment__details">
				<div>
					<p className="payment__subtitle">Fecha de pago</p>
					<p className="payment__date">16 Enero</p>
				</div>
				<Button type="button">PAGAR AHORA</Button>
			</div>
			<ul className="payment__records">
				<PaymentRecord
					icon="/icons/money-solid.svg"
					name="Mis logros"
					amount={27260.0}
				/>
				<PaymentRecord
					icon="/icons/credit-card.svg"
					name="Compras con TDC"
					amount={1600.0}
				/>
			</ul>
		</section>
	)
}
