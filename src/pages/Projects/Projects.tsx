import { FC } from 'react'

import { ProjectsComponent } from './ProjectsComponent'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export const Projects: FC = () => {
	const { projectsList } = useTypedSelector(state => state.projects)

	const projectLinks = projectsList.map(({ name, preview, id }) => {
		return {
			name,
			preview,
			id,
		}
	})

	return <ProjectsComponent projectLinks={projectLinks} />
}
