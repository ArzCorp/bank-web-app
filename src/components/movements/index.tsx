import Container from 'components/Container'
import Movement from './Movement'

export default function Movements() {
	return (
		<section className="movements">
			<Container>
				<div className="movements__details">
					<p className="movements__title">Tus movimientos</p>
					<p className="movements__see">Ver todos</p>
				</div>
				<ul className="movements__list">
					<Movement />
				</ul>
			</Container>
		</section>
	)
}
