import { FC, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

import { AdminDashboardComponent } from './Admin-dashboardComponent'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Login } from './Login'
import { useActions } from '../../hooks/useActions'

export const AdminDashboard: FC = () => {
	// const navigate = useNavigate()
	const {auth} = useActions()
	const { isAuth } = useTypedSelector(state => state.admin)

	const authorization = (login: string, password: string) => {
		// console.log(`Authorization, login: ${login}, password: ${password}`)
		auth({login, password})

	}

	// useEffect(() => {
	// 	if (!isAuth) {
	// 		navigate(Paths.adminAuth)
	// 	}
	// }, [isAuth])


	if (!isAuth) {
		return <Login authorization={authorization}/>
	} else {
		return <AdminDashboardComponent />
	}
}
