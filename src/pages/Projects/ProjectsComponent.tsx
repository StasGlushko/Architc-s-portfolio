import { FC } from 'react'

import s from './Projects.module.scss'
import { Header } from '../../components/Header/Header'
import { Container } from '../../layout/Container/Container'
import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import { ProjectsGrid } from '../../layout/ProjectsGrid/ProjectsGrid'
import { Title } from '../../components/ui/Title/Title'
import { NavLink } from 'react-router-dom'
import { Paths } from '../../routing/paths'

interface ILink {
	name: string
	preview: string
	id: number
}

interface IProps {
	projectLinks: ILink[]
}

export const ProjectsComponent: FC<IProps> = ({ projectLinks }) => {
	return (
		<div className={s.wrapper}>
			<Header />
			<Container>
				<div className={s.flex}>
					<div>
						<Title text='Projects' />
					</div>
					<ProjectsGrid>
						{projectLinks &&
							projectLinks.map(({ id, name, preview }) => {
								return (
									<NavLink
										key={id}
										className={s.link}
										to={Paths.projects + '/' + id}>
										<ProjectCard name={name} preview={preview} />
									</NavLink>
								)
							})}
					</ProjectsGrid>
				</div>
			</Container>
		</div>
	)
}
