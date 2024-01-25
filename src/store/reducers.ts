import { combineReducers } from '@reduxjs/toolkit'
import { projects } from './slices/projects/projects.slice'

export const rootReducer = combineReducers({
	projects: projects.reducer,
})
