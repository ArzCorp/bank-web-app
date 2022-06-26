import { ButtonHTMLAttributes } from 'react'

interface Props {
	type: ButtonHTMLAttributes<HTMLButtonElement>['type']
	children: string
	large?: boolean
	big?: boolean
}

export default function Button({
	type = 'button',
	large,
	big,
	children,
}: Props) {
	const buttonStyles: string = large ? 'button--large' : 'button'
	const buttonSize: string = big ? 'button--big' : ''

	return (
		<button type={type} className={`${buttonStyles} ${buttonSize}`}>
			{children}
		</button>
	)
}
