import Image from 'next/image'

export default function Header() {
	return (
		<header className="header">
			<div></div>
			<h2 className="header__username">Hola Osvaldo</h2>
			<Image
				className="header__userphoto"
				src="/img/user.jpeg"
				alt="foto osvaldo"
				width={24}
				height={24}
			/>
		</header>
	)
}
