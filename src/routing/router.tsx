import { createBrowserRouter } from 'react-router-dom'

import { ErrorPage } from '../pages/Router-error-page/Error-page'
import { Paths } from './paths'
import { Home } from '../pages/Home/Home'
import { Contact } from '../pages/Contact/Contact'
import { Projects } from '../pages/Projects/Projects'
import { Project } from '../pages/Projects/Project/Project'

export const router = createBrowserRouter([
	{
		path: Paths.home,
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: Paths.projects,
		element: <Projects />,
		errorElement: <ErrorPage />,
		// children: [
		// 	{
		// 		path: ':id'
		// 	}
		// ],
	},
	{
		path: Paths.project,
		element: <Project />,
		errorElement: <ErrorPage />,
	},
	{
		path: Paths.contact,
		element: <Contact />,
		errorElement: <ErrorPage />,
	},
])
