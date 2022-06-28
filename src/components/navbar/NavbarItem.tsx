import Image from 'next/image'
import Link from 'next/link'

interface Props {
	icon: string
	active?: boolean
	src?: string
}

export default function NavbarItem({ icon, active, src = '#' }: Props) {
	const activeStyle: string = active ? 'navbar-item__icon--active' : ''

	return (
		<li>
			<Link href={src}>
				<span>
					<Image
						className={`navbar-item__icon ${activeStyle}`}
						src={icon}
						alt="navegar"
						width={25}
						height={25}
					/>
				</span>
			</Link>
		</li>
	)
}
