import { getCurrencyFormat } from 'utils/currencyFormat'
import { movement } from 'utils/types/movement'

import Image from 'next/image'

export default function Movement(movement: movement) {
	return (
		<li className="movement">
			<span className="movement__details">
				<Image
					className="movement__img"
					src={movement.img}
					width={44}
					height={44}
					alt={`movimiento`}
				/>
				<div className="movement__info">
					<p data-testid={'Rick'} className="movement__name">
						{movement.name}
					</p>
					<p className="movement__description">{movement.description}</p>
				</div>
			</span>
			<span>
				<p className="movement__time">{movement.time}</p>
				<p className="movement__amount">{getCurrencyFormat(movement.amount)}</p>
			</span>
		</li>
	)
}
