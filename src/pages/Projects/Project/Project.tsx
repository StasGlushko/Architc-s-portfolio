import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { ProjectComponent } from './ProjectComponent'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { Paths } from '../../../routing/paths'

export const Project: FC = () => {
	const { id } = useParams()

	const { projectsList } = useTypedSelector(state => state.projects)

	const projectInfo = projectsList.find(el => el.id === Number(id))

	const navigate = useNavigate()

	const backToProjectsPage = () => {
			navigate(Paths.projects)
	}
	
	return <ProjectComponent projectInfo={projectInfo} backToProjectsPage={backToProjectsPage} />
}
