import { FC } from 'react'

import s from './Container.module.scss'
import classNames from 'classnames'

interface IProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {}

export const Container: FC<IProps> = ({ children, ...props }) => {
	return (
		<div {...props} className={classNames(s.container, props.className)}>
			{children}
		</div>
	)
}
