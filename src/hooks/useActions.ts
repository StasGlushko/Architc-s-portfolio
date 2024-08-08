import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

import { projects } from '../store/slices/projects/projects.slice'
import { admin } from '../store/slices/admin/admin.slice'

const rootActions = {
	...projects.actions,
	...admin.actions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
