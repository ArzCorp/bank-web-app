import { ButtonHTMLAttributes } from 'react'

interface Props {
	type: ButtonHTMLAttributes<HTMLButtonElement>['type']
	children: string
}

export default function Button({ type = 'button', children }: Props) {
	return (
		<button type={type} className="button">
			{children}
		</button>
	)
}
