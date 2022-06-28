import Container from 'components/Container'
import useMovements from 'hooks/useMovements'
import Movement from './Movement'

export default function Movements() {
	const { movements, loading } = useMovements()

	return (
		<section className="movements">
			<Container>
				<div className="movements__details">
					<p className="movements__title">Tus movimientos</p>
					<p className="movements__see">Ver todos</p>
				</div>
				{loading ? (
					<p>Cargando...</p>
				) : (
					<ul className="movements__list">
						{movements.map((movement) => (
							<Movement key={movement.name} {...movement} />
						))}
					</ul>
				)}
			</Container>
		</section>
	)
}
