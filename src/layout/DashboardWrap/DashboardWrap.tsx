import { FC } from 'react'

import s from './DashboardWrap.module.scss'

interface IProps {
	children: React.ReactNode
}

export const DashboardWrap: FC<IProps> = ({ children }) => {
	return <div className={s.wrap}>{children}</div>
}
