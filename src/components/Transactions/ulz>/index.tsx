import Container from 'components/Container'
import TransactionItem from './TransactionItem'

interface Props {
	children: React.ReactNode
}

export default function Transactions({ children }: Props) {
	return (
		<section className="transactions">
			<Container className="transactions__container">
				<ul className="transactions__list">
					<TransactionItem icon="/icons/star-solid.svg" name="Crear logro" />
					<TransactionItem icon="/icons/tag-solid.svg" name="Pagar servicio" />
					<TransactionItem icon="/icons/bell-solid.svg" name="Suscripción" />
				</ul>
			</Container>
			{children}
		</section>
	)
}
