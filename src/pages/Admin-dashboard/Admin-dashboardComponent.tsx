import { FC } from 'react'

import s from './Admin-dashboard.module.scss'
import { Container } from '../../layout/Container/Container'

export const AdminDashboardComponent: FC = () => {
	return (
		<Container>
			<div className={s.wrapper}>
				<h2>Admin-dashboard page</h2>
			</div>
		</Container>
	)
}
