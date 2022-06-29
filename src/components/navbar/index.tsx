import Container from 'components/Container'
import NavbarItem from './NavbarItem'

export default function Navbar() {
	return (
		<nav className="navbar">
			<Container className="navbar__container">
				<ul className="navbar__list">
					<NavbarItem name="Home" icon="/icons/home.svg" active={true} />
					<NavbarItem
						name="Disposición"
						icon="/icons/money.svg"
						src="/disposicion"
					/>
					<NavbarItem name="Tarjetas" icon="/icons/credit-card.svg" />
					<NavbarItem name="Promociones" icon="/icons/star.svg" />
					<NavbarItem name="Notificaciones" icon="/icons/bell.svg" />
				</ul>
				<div className="navbar__bar"></div>
			</Container>
		</nav>
	)
}
