import Image from 'next/image'
import Container from './Container'
import Navbar from './navbar'

export default function Header() {
	return (
		<header className="header">
			<Container className="header__container">
				<div className="header__navbar">
					<Navbar />
				</div>
				<div className="header__user">
					<h2 className="header__username">Hola Osvaldo</h2>
					<Image
						className="header__userphoto"
						src="/img/user.jpeg"
						alt="foto osvaldo"
						width={24}
						height={24}
					/>
				</div>
			</Container>
		</header>
	)
}
