import { combineReducers } from '@reduxjs/toolkit'
import { projects } from './slices/projects/projects.slice'
import { admin } from './slices/admin/admin.slice'

export const rootReducer = combineReducers({
	projects: projects.reducer,
	admin: admin.reducer
})
