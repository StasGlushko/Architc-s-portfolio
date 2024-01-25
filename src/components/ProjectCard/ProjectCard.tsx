import { FC } from 'react'

import s from './ProjectCard.module.scss'

interface IProps {
	name: string
	preview: string
}

export const ProjectCard: FC<IProps> = ({ name, preview }) => {
	return (
		<div className={s.bg} style={{ backgroundImage: `url(${preview})` }}>
			<p className={s.info}>{name}</p>
		</div>
	)
}
