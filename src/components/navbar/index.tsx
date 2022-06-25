import Container from 'components/Container'
import NavbarItem from './NavbarItem'

export default function Navbar() {
	return (
		<nav className="navbar">
			<Container className="navbar__container">
				<ul className="navbar__list">
					<NavbarItem icon="/icons/home.svg" active={true} />
					<NavbarItem icon="/icons/money.svg" />
					<NavbarItem icon="/icons/credit-card.svg" />
					<NavbarItem icon="/icons/star.svg" />
					<NavbarItem icon="/icons/bell.svg" />
				</ul>
				<div className="navbar__bar"></div>
			</Container>
		</nav>
	)
}
