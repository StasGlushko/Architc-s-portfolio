import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
	login: string
	password: string
	isAuth: boolean
}

const initialState: IInitialState = {
	login: 'admin',
	password: 'admin',
	isAuth: true,
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
