import './styles/index.scss'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { RouterProvider } from 'react-router-dom'
import { router } from './routing/router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>,
)
