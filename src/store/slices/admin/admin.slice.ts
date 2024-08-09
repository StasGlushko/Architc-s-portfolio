import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMessages } from '../../../types/Types'

interface IInitialState {
	login: string
	password: string
	isAuth: boolean
	messages: IMessages[]
}

const initialState: IInitialState = {
	login: 'admin',
	password: 'admin',
	isAuth: true,
	messages: [
		{
			name: 'Stas',
			email: 'admin@gmail.com',
			message: 'Hello, admin',
			id: 1,
		},
		{
			name: 'Sergiy',
			email: 'admin2121@gmail.com',
			message: 'Hello, admin 2',
			id: 2,
		},
		{
			name: 'Sasha',
			email: 'admin11@gmail.com',
			message: 'Hello, admin 3',
			id: 3,
		},
	],
}

export const admin = createSlice({
	name: 'admin',
	initialState,
	reducers: {
		auth(
			state,
			{ payload }: PayloadAction<{ login: string; password: string }>,
		) {
			let { login, password, isAuth } = state

			if (login !== payload.login || password !== payload.password) {
				return state
			}
			isAuth = !isAuth
			return { ...initialState, isAuth }
		},
	},
})

export const { actions, reducer } = admin
