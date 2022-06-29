import Balance from 'components/Balance'
import Button from 'components/Button'
import CircularCalculation from 'components/CircularCalculation'
import Container from 'components/Container'
import type { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getCurrencyFormat } from 'utils/currencyFormat'

const Provision: NextPage = () => {
	const { back } = useRouter()
	return (
		<section className="provision">
			<Head>
				<title>Bank - Disposición</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container className="provision__container">
				<div className="provision__navigate">
					<Image
						src="/icons/arrow-left.svg"
						width={24}
						height={24}
						alt="regresar"
						onClick={() => back()}
					/>
					<Link href="/">
						<span className="provision__cancel">CANCELAR</span>
					</Link>
				</div>
				<h2 className="provision__title">Disposición</h2>
				<Balance title="Tienes disponible" />
			</Container>
			<Container className="provision__container">
				<p className="provision__pill">Auto</p>
				<p className="provision__pill">{getCurrencyFormat(350000.0)}</p>
				<div className="navbar__bar"></div>
			</Container>
			<Container className="provision__months">
				<p className="provision__subtitle">Selecciona tu plazo</p>
				<div className="provision__circle">
					<CircularCalculation />
					<Button type="button" large big>
						LO QUIERO
					</Button>
				</div>
			</Container>
		</section>
	)
}

export default Provision
