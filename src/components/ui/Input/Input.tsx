import { FC } from 'react'

import s from './Input.module.scss'

interface IProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {}

export const Input: FC<IProps> = props => {
	return <input className={s.input} {...props}/>
}
