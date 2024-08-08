import { FC, useState } from 'react'

import s from './Admin-dashboard.module.scss'
import { Container } from '../../layout/Container/Container'

interface IProps {
	authorization: (login: string, password: string) => void
}

export const Login: FC<IProps> = ({ authorization }) => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (login.length === 0 || password.length === 0) {
			return
		}
		authorization(login, password)
      setLogin('')
      setPassword('')
	}

	return (
		<Container className={s.loginContainer}>
			<div className={s.wrapper + ' ' + s.loginWrap}>
				<form onSubmit={onSubmit} className={s.form}>
					<h2>Login</h2>
					<input
						onChange={e => setLogin(e.target.value)}
						type='text'
						placeholder='Login...'
						value={login}
					/>
					<input
						onChange={e => setPassword(e.target.value)}
						type='password'
						placeholder='Password...'
						value={password}
					/>
					<button type='submit'>Login</button>
				</form>
			</div>
		</Container>
	)
}
