import Image from 'next/image'

interface Props {
	icon: string
	name: string
}

export default function TransactionItem({ icon, name }: Props) {
	return (
		<li className="transaction-item">
			<span>
				<Image
					className="transaction-item__icon"
					height={21}
					width={21}
					src={icon}
					alt={`transacción ${name}`}
				/>
			</span>
			<span className="transaction-item__name">{name}</span>
		</li>
	)
}
