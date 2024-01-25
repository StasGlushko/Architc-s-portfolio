import { FC } from 'react'

import s from './ProjectsGrid.module.scss'

interface IProps {
	children: React.ReactNode
}

export const ProjectsGrid: FC<IProps> = ({ children }) => {
	return <div className={s.grid}>{children}</div>
}
