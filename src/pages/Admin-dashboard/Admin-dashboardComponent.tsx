import { FC } from 'react'

import s from './Admin-dashboard.module.scss'
import { Container } from '../../layout/Container/Container'
import { Link, Outlet } from 'react-router-dom'
import { Paths } from '../../routing/paths'

interface IProps {
	activePath: null | string
}

export const AdminDashboardComponent: FC<IProps> = ({ activePath }) => {
	return (
		<Container className={s.container}>
			<div className={s.wrapper}>
				<aside className={s.aside}>
					<h2 className={s.title}>Admin-dashboard</h2>

					<ul className={s.navigation}>
						<li
							className={
								s.navItem +
								' ' +
								(activePath === '/projects' ? s.active : '')
							}>
							<Link to={Paths.adminProjects}>Projects</Link>
						</li>
						<li
							className={
								s.navItem +
								' ' +
								(activePath === '/messages' ? s.active : '')
							}>
							<Link to={Paths.adminMessages}>Messages</Link>
						</li>
					</ul>
				</aside>
				<Outlet />
			</div>
		</Container>
	)
}
