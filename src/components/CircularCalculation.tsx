import { getCurrencyFormat } from 'utils/currencyFormat'

export default function CircularCalculation() {
	return (
		<section className="circle">
			<div className="circle__dotted"></div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				width="213px"
				height="213px"
			>
				<defs>
					<linearGradient id="GradientColor">
						<stop offset="10%" stopColor="#bb64c8" />
						<stop offset="70%" stopColor="#783183" />
					</linearGradient>
				</defs>
				<circle cx="105" cy="107" r="94" strokeLinecap="round" />
			</svg>
			<div className="progress-dot__start"></div>
			<div className="progress-dot__end"></div>
			<div className="circle__inner">
				<h2 className="circle__title">Tu pago mensual</h2>
				<p className="circle__amount">{getCurrencyFormat(12000.0)}</p>
				<p className="circle__time">a 60 meses</p>
				<p className="circle__interest">
					Tasa de interés <br /> 16.6%
				</p>
			</div>
		</section>
	)
}
