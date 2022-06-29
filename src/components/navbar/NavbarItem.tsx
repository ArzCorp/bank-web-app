import Image from 'next/image'
import Link from 'next/link'

interface Props {
	icon: string
	active?: boolean
	src?: string
	name: string
}

export default function NavbarItem({ icon, active, src = '#', name }: Props) {
	const activeStyle: string = active ? 'navbar-item__icon--active' : ''

	return (
		<li>
			<Link href={src}>
				<span className="navbar-item">
					<Image
						className={`navbar-item__icon ${activeStyle}`}
						src={icon}
						alt="navegar"
						width={25}
						height={25}
					/>
					<p className="navbar-item__name">{name}</p>
				</span>
			</Link>
		</li>
	)
}
