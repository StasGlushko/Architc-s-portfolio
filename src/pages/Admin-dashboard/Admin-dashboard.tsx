import { FC, useEffect, useState } from 'react'

import { AdminDashboardComponent } from './Admin-dashboardComponent'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Login } from './Login'
import { useActions } from '../../hooks/useActions'
import { useLocation } from 'react-router-dom'

interface IProps {}

export const AdminDashboard: FC<IProps> = () => {
	const location = useLocation()
	const { auth } = useActions()
	const { isAuth } = useTypedSelector(state => state.admin)

	const authorization = (login: string, password: string) => {
		auth({ login, password })
	}
	const [activePath, setActivePath] = useState<null | string>(null)

	useEffect(() => {
		if (location) {
			let tmp = location.pathname.slice(
				location.pathname.lastIndexOf('/'),
				location.pathname.length,
			)
			setActivePath(tmp)
		}
	}, [location])

	

	if (!isAuth) {
		return <Login authorization={authorization} />
	} else {
		return <AdminDashboardComponent activePath={activePath} />
	}
}
