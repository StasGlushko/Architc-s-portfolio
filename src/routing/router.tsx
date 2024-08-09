import { createBrowserRouter } from 'react-router-dom'

import { ErrorPage } from '../pages/Router-error-page/Error-page'
import { Paths } from './paths'
import { Home } from '../pages/Home/Home'
import { Contact } from '../pages/Contact/Contact'
import { Projects } from '../pages/Projects/Projects'
import { Project } from '../pages/Projects/Project/Project'
import { AdminDashboard } from '../pages/Admin-dashboard/Admin-dashboard'
import { ProjectsAd } from '../pages/Admin-dashboard/ProjectsAd/ProjectsAd'
import { MessagesAd } from '../pages/Admin-dashboard/MessagesAd/MessagesAd'

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
	{
		path: Paths.admin,
		element: <AdminDashboard />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: Paths.adminProjects,
				element: <ProjectsAd />,
			},
			{
				path: Paths.adminMessages,
				element: <MessagesAd />,
			},
		],
	},
])
