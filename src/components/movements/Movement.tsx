import Image from 'next/image'

export default function Movement() {
	return (
		<li className="movement">
			<span className="movement__details">
				<Image
					className="movement__img"
					src="/img/user.jpeg"
					width={44}
					height={44}
					alt={`movimiento`}
				/>
				<div className="movement__info">
					<p className="movement__name">Autos</p>
					<p className="movement__description">Mis logros</p>
				</div>
			</span>
			<span>
				<p className="movement__time">2m</p>
				<p className="movement__amount">$350,000.00</p>
			</span>
		</li>
	)
}
