import { ButtonHTMLAttributes, FC } from 'react'
import classNames from 'classnames'

import s from './Button.module.scss'

interface IButtonProps
	extends React.DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	secColor?: boolean
}

export const Button: FC<IButtonProps> = ({
	children,
	secColor = false,
	...props
}) => {
	return (
		<button
			className={classNames(s.button, secColor && s.secColor)}
			{...props}>
			{children}
		</button>
	)
}
