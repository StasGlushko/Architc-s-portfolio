import { FC } from 'react'

import s from './ProjectsAd.module.scss'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { DashboardWrap } from '../../../layout/DashboardWrap/DashboardWrap'

export const ProjectsAd: FC = () => {
	const { projectsList } = useTypedSelector(state => state.projects)

	return (
		<DashboardWrap>
			<h3>Projects List</h3>
			<ul>
				{projectsList.map(el => {
					return <li>{el.name}</li>
				})}
			</ul>
		</DashboardWrap>
	)
}
