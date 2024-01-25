import { FC } from 'react'

import s from './TextArea.module.scss'

interface IProps
	extends React.DetailedHTMLProps<
		React.TextareaHTMLAttributes<HTMLTextAreaElement>,
		HTMLTextAreaElement
	> {}

export const TextArea: FC<IProps> = props => {
	return <textarea className={s.textArea} {...props} />
}
